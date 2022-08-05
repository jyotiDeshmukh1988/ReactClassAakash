import React, { Fragment } from 'react';

const Product = (props) => {
    console.log(props.prodData);// we are getting this prodData from the parent component that is Home.js
    return(
        <Fragment>
            <h3>My products</h3>
        </Fragment>
    )
}

export default Product;