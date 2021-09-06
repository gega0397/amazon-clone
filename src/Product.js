import React from 'react'
import "./Product.css"
import { useStateValue } from './stateprovider'

function Product({id, info, price, rating, image,}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket= () => {
        //dispatch data
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                info: info,
                image: image,
                price: price,
                rating: rating,
            }
        }) 
    }
    
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
            src={image}
            alt='img' />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
