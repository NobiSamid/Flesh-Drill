import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./shop.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <NavBar></NavBar>
            <Row className="g-4 shopCard">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Shop;