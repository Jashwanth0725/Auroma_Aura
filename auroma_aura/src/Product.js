import React from 'react'
import "./Product.css"

function Product({productname,rating,price,image,description}) {
  return (
    <div className="Product">
        <p>{productname}</p>
        <p className="product-price">
        <small>₹</small>
        <strong>{price}</strong>
        </p>
        <div className="product-rating">
        {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
        <div className="product-image">
            {image}
        </div>
        <div className="product-description"><p>{description}</p></div>
        <button>Add to Cart</button>

    </div>
  )
}

export default Product