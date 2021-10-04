import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Plan = (props) => {
    const { title, intro, image, category } = props.plan || {};
    return (
        <Col>
            <Card border="light" style={{width:'30rem'}}>
                <Card.Img variant="top" style={{width:'auto', height:'200px'}} src={image}/>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Category: {category}</Card.Text>
                    <Card.Text>About: {intro}</Card.Text>
                </Card.Header>
            </Card>
        </Col>
    );
};

export default Plan;