import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'


function Product({ id, title, image, price, rating }) {
  
    const [{ basket }, dispatch] = useStateValue();
   console.log('Our new baskset', basket);
  
   const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className = "product">
            <div className = "product_info">
                <p>{title}</p>
                <p className = "product_price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className = "product_rating">
                    
                     <p>{rating}</p>
                    
                    
                    
                </div>   
            </div>
        <img src = {image} alt ="" />
        <button className = "btn" onClick={addToBasket}>Add to cart</button>
        <button className = "btn" onClick={addToBasket}>Buy Now</button>

        </div>
    )
}

export default Product

