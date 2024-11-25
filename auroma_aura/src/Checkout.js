import React from 'react';
import "./Checkout.css";
import Product from './Product';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="Checkout">
            <div className="left-side">
                <div className="ads">
                    <img className="ad-image" src="./Images/earth.jpg" alt="Ads"></img>
                </div>
                <div className="basket">
                    <strong><h2>Your Shopping Basket</h2></strong>
                    <div className="products">
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
                    </div>
                </div>
            </div>
            <div className="total">
                <Subtotal/>
                <p>SubTotal (items): <strong>Price</strong></p>

                <button>Proceed to payment</button>

            </div>
        </div>
    )
}

export default Checkout