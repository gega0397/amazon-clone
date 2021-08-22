import React from 'react'
import "./Product.css"

function Product({id, info, price, rating, img,}) {
    return (
        <div className="product">
            <div className="product__info">
            {/* description */}
                <p> {info}</p>
            {/* price */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            {/* rating  {Array(rating).fill().map(i => 
                     <p>*</p>)}*/}
                <div className="product__rating">
                 {Array(rating).fill().map((_,i) => 
                     <p>*</p>
                 )}
                </div>
            </div>
            {/* img */}
            <img
            src={img}
            alt='img' />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
