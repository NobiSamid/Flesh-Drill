import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const PlanDetails = () => {
    const {programKey} = useParams();
    // const [planDetails, setPlanDetails] = useState([]);
    //  useEffect(()=>{
    //     fetch('./plansort.json')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])

    // console.log(planDetails);



    return (
        <div>
            <NavBar></NavBar>
            <h1>Hello there this is plan details of {programKey} number</h1>
            <Footer></Footer>
        </div>
    );
};

export default PlanDetails;