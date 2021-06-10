import React from 'react'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className = "checkout">
            <div className = "checkout_left"> 
            <img className = "checkout_ad" src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00b353de-5852-4bc5-b3dc-29a9d9c9df2a/dz0eue-896a48ce-f30a-40cd-9fbc-1d4c3b0d9ee0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wMGIzNTNkZS01ODUyLTRiYzUtYjNkYy0yOWE5ZDljOWRmMmEvZHowZXVlLTg5NmE0OGNlLWYzMGEtNDBjZC05ZmJjLTFkNGMzYjBkOWVlMC5wbmcifV1dfQ.LeL0TrF7qGoB6zScJz2yiGqOBpGEyu3mIrPX0okLOso"  
            alt = " " /> 
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className = "checkout_title">Your shopping basket</h2>
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
        <div className = "checkout_right" >
            <Subtotal />
        </div>
        </div>
    )
}

export default Checkout
