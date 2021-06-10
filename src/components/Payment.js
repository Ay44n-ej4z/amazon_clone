import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'

function Payment() {
    const history = useHistory()
    const [{basket, user}, dispatch] = useStateValue();
    const [succeeded, setSucceeded] =  useState(false);
    const [processing, setProcessing] =useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null)
    const [clientSecret, SetClientSecret] =  useState(true);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(()=> {
        const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    url: `/payment/create?total=${getBasketTotal(basket) * 100}`
                })
                SetClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])
    console.log("the client", clientSecret);
    const handleClick = async event=> {
        event.preventDefault();
        setProcessing(true);

        const payload =  await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replaceState('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "")
    }

    return (
        <div className = "payment">
            <div className = 'payment_container'>
                <h1>
                    Checkout (<Link to = "/checkout"> {basket?.length} items </Link>)
                </h1>
                <div className = "payment_section">
                <div className = "payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className = 'payment_address'>
                    <p>{user?.email}</p>
                    <p>1351, ijasdijcsd</p>
                    <p>kjasjdbcasodc</p>
                </div>
            </div>
            <div className = 'payment_section'>
                <div className = "payment_title">
                    <h3>Review items and Delivery</h3>
                </div>
                <div className = "payment_item">
                {basket.map(item => (
                   <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                   /> 
                ))}
                </div>
            </div>
            <div className = 'payment_section'>
                    <div className = "payment_title">
                    <h3>Payment Method</h3>    
                     </div>
                     <div className = "payment_details">
                        <form onSubmit = {handleClick} >
                            <CardElement onChange = {handleChange} /> 
                            <div className = "price_details"> 
                            <CurrencyFormat   
         renderText={(value) => ( 
            <h3>Order Tools: {value}</h3>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType= {"text"}
            thousandSeparator = {true}
            prefix = {"$"}
        />
        <button disabled = {processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> : "Buy now" }</span>
        </button>
                            {error && <div> {error} </div> } </div>
                        </form>
                     </div>
            </div>
            
            </div>
        </div>
    )
}

export default Payment
