import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className="Product">
        <p>Product Name</p>
        <p className="product-price">
        <small>₹</small>
        <strong>120</strong>
        </p>
        <p className="product-rating">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </p>
        <img src="Images/herbal.png" alt="product image"></img>
        <button>Add to Cart</button>

    </div>
  )
}

export default Product