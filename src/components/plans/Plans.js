import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import Plan from './Plan';

const Plans = () => {
    const [plans, setPlan] = useState([]);
    useEffect(()=>{
        fetch('./plans.json')
        .then(res=>res.json())
        .then(data=>setPlan(data))
    },[])
    return (
        <div>
            <NavBar></NavBar>
            <Row xs={1} md={2} className="g-4" >
               {
                    plans.map(plan=><Plan
                    key={plan.id}
                    plan={plan}
                    ></Plan>)
                }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Plans;