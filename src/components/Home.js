import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className = "home">
            <div className = "home_container">
                <img className = "home_image" src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                alt = "" />

                <div className = "home_row">
                    <Product 
                    id = ""
                    title = "Cycbertron" 
                    price = {1040}
                    image = "http://cdn.differencebetween.net/wp-content/uploads/2018/01/Difference-between-Earphones-and-Headphones-1.jpeg"
                    rating = {5}
                        />
                    <Product id = ""
                    title = "Boat" 
                    price = {999}
                    image = "https://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524670109tnfcf.png"
                    rating = {5} />      
                    </div> 
                    <div className = "home_row">
                    <Product id = ""
                    title = "Jbl-523" 
                    price = {400}
                    image = "https://n3.sdlcdn.com/imgs/h/o/l/DJ-Enterprises-Wireless-Bluetooth-Headphone-SDL120135589-1-96340.jpeg"
                    rating = {5}/>  
                    <Product 
                    id = ""
                    title = "Jogger_freeStyle" 
                    price = {300}
                    image = "https://cdnc.lystit.com/photos/2012/04/14/carhartt-green-carhartt-aviation-pant-product-1-3252414-997321064.jpeg"
                    rating = {5} />  
                    <Product 
                    id = ""
                    title = "Iphone XR" 
                    price = {32000}
                    image = "https://cdn2.macworld.co.uk/cmsdata/features/3683540/iphone_xr_yellow.jpg"
                    rating = {5} />  
                    </div>   
                    <div className = "home_row">
                    <Product
                    id = ""
                    title = "Samsung-led-tv" 
                    price = {40000}
                    image = "https://static.digit.in/default/7d558cb4f3892ac8f8a7b3e820a7747eec5eee75.jpeg"
                    rating = {5} />  
                    </div>         
            </div>
        </div>
    )
}

export default Home
