import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlans.css';

const AddPlans = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/plans', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('data added successfully')
                reset();
            }
            console.log(res);
        })
    }

    return (
        <div className="add-plans">
            <h3>Please add a service</h3> 
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" {...register("title", { required: true, maxLength: 20 })} />
            <textarea placeholder="Description" {...register("description", { required: true, maxLength:1000 })} />
            <input placeholder="Program fees" type="number" {...register("fee", { min: 100, max: 1000 })} />
            <input placeholder="banner" { ...register("img")} />
            <input type="submit" />
            </form>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
};

export default AddPlans;