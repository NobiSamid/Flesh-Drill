import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Roll = () => {
    const { planId } = useParams();
    const [plan, setPlan] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/plans/${planId}`)
        .then(res => res.json())
        .then(data => setPlan(data));
    },[])

    return (
        <div>
            <h2>this is booking: {planId}</h2>
            <h3>This is details of : {plan.title}</h3>
            <h3>detail : {plan.description}</h3>
            <h3>Plan fees : {plan.fee}</h3>
        </div>
    );
};

export default Roll;