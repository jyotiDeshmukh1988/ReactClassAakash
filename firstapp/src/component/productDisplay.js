import React, { Fragment } from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.prodData);// we are getting this prodData from the parent component that is Home.js
    const renderProduct = props.prodData.map((item) => {
        return (
            <div className="card" key={item.id}>
                <img src={item.image}/>
                <h2>{item.name}</h2>
                <h3>{item.uses}</h3>
                <h2>Rs: {item.cost}</h2>
            </div>
        )
    })
    return(
        <Fragment>
        <div className='main'>
            {renderProduct}
        </div>
        </Fragment>
    )
}

export default Product;