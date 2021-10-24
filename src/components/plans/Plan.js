import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Plans.css"

//********************************************** Plans Page Component **************************************//
const Plan = (props) => {

    //************************* Plans Data Destructuring **********************//
    const { _id, title, intro, description, img, fee, image, category } = props.plan || {};
    return (

        //************************* Plan single Card **********************//
        <Col>
            <Card className="plansbgcard" border="light" style={{width:'30rem'}}>
                <Card.Img variant="top" style={{width:'auto', height:'200px'}} src={img}/>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Fee: {fee}</Card.Text>
                    <Card.Text>About: {description}</Card.Text>
                </Card.Header>
                <Link to={`/plans/${_id}`}>
                    <button>Details</button>
                </Link>
            </Card>
        </Col>
    );
};

export default Plan;