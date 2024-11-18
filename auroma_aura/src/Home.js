import React from "react";
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="Home">
            <img className="image" src="Images/earth.jpg" alt="show images"></img>
            <div className="categories"><b>Our Categories</b></div>
            <div className="rows">
                <div className="first-row">
                    <Product />
                    


                </div>

                <div className="second-row">
                    
                </div>
            </div>
        </div>


    )
}
export default Home;