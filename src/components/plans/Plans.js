import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import Plan from './Plan';
import './Plans.css';

//********************************************** Plans Page **************************************//
const Plans = () => {

    //************************* Plans Functionality => Fetch data of Plans and keep it on state **********************//
    const [plans, setPlan] = useState([]);
    useEffect(()=>{
        fetch('./plans.json')
        .then(res=>res.json())
        .then(data=>setPlan(data))
    },[])
    return (
        <div className="plansbg">
        {/************************* Display Navigation Bar **********************/}
            <NavBar></NavBar>

            {/************************* Plan Cards **********************/}
            <Row xs={1} md={2} className="g-4 planCard" >
               {
                    plans.map(plan=><Plan
                    key={plan.id}
                    plan={plan}
                    ></Plan>)
                }
            </Row>

            {/************************* Display Footer **********************/}
            <Footer></Footer>
        </div>
    );
};

export default Plans;