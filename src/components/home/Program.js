import React from 'react';
import { Card, Col } from 'react-bootstrap';

//********************************************** Home page component **************************************//
const Program = (props) => {

    //************************* Destructuring Home card components **********************//
    const { title, intro, image} = props.card || {};
    return (

        //************************* Display Home single Card **********************//
        <Col>
            <Card border="light" style={{width:'30rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                </Card.Header>
            </Card>
        </Col>
    );
};

export default Program;