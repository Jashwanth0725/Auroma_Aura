import React from "react";
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="Home">
            <div className="home-image">
                <img className="image" src="Images/earth.jpg" alt="show images"></img>
            </div>
                <div className="rows">
                    <Product 
                    id="12345"
                    productname="Product-1" 
                    price={20} 
                    image ={<img src='Images/herbal.png' alt="product-image"></img>} 
                    rating={5}/>
                    <Product 
                    id="12345"
                    productname="Product-2" 
                    price={20} 
                    image ={<img src='Images/Sambrani.png' alt="product-image"></img>} 
                    rating={3}/>
                    <Product 
                    id="12345"
                    productname="Product-3" 
                    price={20} 
                    image ={<img src='Images/Itachi.jpg' alt="product-image"></img>} 
                    rating={4}/>
                </div>

                <div className="rows">
                <Product 
                    id="12345"
                    productname="Product-1" 
                    price={20} 
                    image ={<img src='Images/herbal.png' alt="product-image"></img>} 
                    rating={2}/>
                    <Product 
                    id="12345"
                    productname="Product-3" 
                    price={20} 
                    image ={<img src='Images/Itachi.jpg' alt="product-image"></img>} 
                    rating={3}/>
                </div>
                
                <div className="rows">
                <Product 
                    id="12345"
                    productname="Product-2" 
                    price={20} 
                    image ={<img src='Images/Sambrani.png' alt="product-image"></img>} 
                    rating={3}/>
                </div>            
        </div>


    )
}
export default Home;