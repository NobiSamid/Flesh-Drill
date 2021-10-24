import React, { useEffect, useState } from 'react';

const ManagePlans = () => {

    const [plans, setPlans] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/plans')
        .then(res => res.json())
        .then(data=> setPlans(data))
    },[])

    const handleDelete = id => {
        const url = `http://localhost:5000/plans/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('successfully Deleted')
                const remaining = plans.filter( plan => plan._id !== id);
                setPlans(remaining);
            }
        })
    }
    return (
        <div>
            <h2>This is manage services</h2>
            {
                plans.map(plan => <div key={plan._id}>
                <h3>{plan.title}</h3>
                <button onClick={() => handleDelete(plan._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManagePlans;