import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" 
                alt="background"
                />
                <div className="home__row">
                    <Product info = {"Baby shower"} price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                    <Product info = {"Baby shower"}  price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                </div>

                <div className="home__row">
                    {/* product */}
                    <Product info = {"Baby shower"}  price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                    {/* product */}
                    <Product info = {"Baby shower"}  price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                    {/* product */}
                    <Product info = {"Baby shower"}  price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                </div>

                <div className="home__row">
                    {/* product */}
                    <Product info = {"Baby shower"}  price= {19.50} rating={3} img="https://m.media-amazon.com/images/I/714T+0jI-fL._AC_SL1500_.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home
