import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// এখানে সব প্রপ্স এর মধ্যে শুধু চিলড্রেনকে আমরা নিচ্ছি বাকি গুলা আমরা পাঠিয়ে দিব । এজন্য সব প্রপ্স থেকে চিলড্রেনকে আলাদা করা হয়েছে।
const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <Spinner variant="danger" animation="grow" />
    }
    return (
        // যত গুলা রাউট আছে সবাইকে রেস্ট এর মধ্যে থাকা প্রপ্স গুলাকে পাঠিয়ে দেয়া হয়েছে রাউট এর মধ্যে রেস্ট এট্রিবিউট ইউস করে । 
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect 
                to={{
                    pathname: "/login",
                    state: { from:location }
                }}
                ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;