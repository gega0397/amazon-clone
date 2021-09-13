import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './stateprovider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src ="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668"
                alt="AD_IMAGE"/>
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(element => {
                    return <CheckoutProduct id={element.id} image={element.image} info={element.info} rating={element.rating} price={element.price} /> ;
                })}
            </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
