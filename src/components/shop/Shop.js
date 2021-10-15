import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';

//********************************************** Shop Now Page **************************************//
const Shop = () => {
    //************************* Shop-Now Page Functionality => Fetch data & keep it on state **********************//
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./shop.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="shopbg">

            {/************************* Shop Now Product Cards **********************/}
            <Row className="g-4 shopCard">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </Row>

        </div>
    );
};

export default Shop;