import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Detail from './Detail';

const PlanDetails = () => {
    const {programKey} = useParams();
    const [planDetails, setPlanDetails] = useState([]);
     useEffect(()=>{
        fetch('https://raw.githubusercontent.com/NobiSamid/Flesh-Drill/main/public/plansort.json')
        .then(res=>res.json())
        .then(data=>setPlanDetails(data))
    },[])

    // console.log(planDetails);

    const index = programKey - 1;
    // console.log(planDetails[index]?.plans);
    const detailsOf = planDetails[index]?.plans ;
    // console.log(detailsOf);
    detailsOf?.map(d=>console.log(d));


    return (
        <div>
            <h1>Hello there this is plan details of {programKey} number</h1>
            <Row xs={1} md={2} className="g-4 planCard" >
               {
                    detailsOf?.map(detail=><Detail
                    key={detail.id}
                    detail={detail}
                    ></Detail>)
                }
            </Row>
        </div>
    );
};

export default PlanDetails;