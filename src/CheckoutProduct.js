import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './stateprovider';

function CheckoutProduct({id, image, info, rating, price}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type: "REMOVE",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
            src={image}
            alt='img' />
            <div className="checkoutProduct__info">
            {/* description */}
                <p className="checkoutProduct__infot"> {info}</p>
            {/* price */}
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            {/* rating  {Array(rating).fill().map(i => 
                     <p>*</p>)}*/}
                <div className="checkoutProduct__rating">
                 {Array(rating).fill().map((_,i) => 
                     <p>*</p>
                 )}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>                        
        </div>
    )
}

export default CheckoutProduct 
