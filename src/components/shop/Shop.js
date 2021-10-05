import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
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
        <div>
        {/************************* Display Navigation Bar **********************/}
            <NavBar></NavBar>

            {/************************* Shop Now Product Cards **********************/}
            <Row className="g-4 shopCard">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </Row>

            {/************************* Display Footer **********************/}
            <Footer></Footer>
        </div>
    );
};

export default Shop;