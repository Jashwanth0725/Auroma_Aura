import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
            <div className="home-image">
                <img className="image" src="Images/earth.jpg" alt="show images"></img>
            </div>
            <div className="rows">
                <Product
                    id="12345"
                    productname="Natural Cones"
                    price={20}
                    image={<img src='Images/Cone Dhoop.png' alt="product-image"></img>}
                    rating={5}
                    description={"Natural Dhoop Cones: Divine Aroma for peace, prayers, and serenity."} 
                    />
                <Product
                    id="12345"
                    productname="Traditional Dhoops"
                    price={20}
                    image={<img src='Images/Traditional dhoop.png' alt="product-image"></img>}
                    rating={4}
                    description={"Traditional Dhoop: Pure Aroma for prayers, meditation, and tranquility."} 
                    />
                <Product
                    id="12345"
                    productname="Sambrani"
                    price={40}
                    image={<img src='Images/Sambrani.png' alt="product-image"></img>}
                    rating={4} 
                    description={"Pure Sambrani Dhoop: Traditional Aroma for rituals and relaxation."} 
                    />
            </div>
            <div className="rows">
                <Product
                    id="12345"
                    productname="Herbal Dhoops"
                    price={60}
                    image={<img src='Images/herbal.png' alt="product-image"></img>}
                    rating={4} />
                <Product
                    id="12345"
                    productname="Aromatic Dhoops"
                    price={60}
                    image={<img src='Images/Aromatic Dhoop.png' alt="product-image"></img>}
                    rating={4} />
            </div>
            <div className="rows">
                <Product
                    id="12345"
                    productname="Flower Dhoops"
                    price={60}
                    image={<img src='Images/floral.png' alt="product-image"></img>}
                    rating={5} />
            </div>
        </div>


    )
}
export default Home;