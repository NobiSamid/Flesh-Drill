import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "./Home.css"

//********************************************** Home page component **************************************//
const Program = (props) => {

    //************************* Destructuring Home card components **********************//
    const { title, intro, image, id} = props.card || {};
    const history = useHistory();
    // const url = `plans/${id}`;
    const handleGetPlans = () =>{
        history.push(`/programs/${id}`)
    }



    return (

        //************************* Display Home single Card **********************//
        <Col>
            <Card className="cardbghome" style={{width:'30rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                    <Link to={`/programs/${id}`}>
                        <Button className="btn btn-secondary" onClick={handleGetPlans}>Get Plans</Button>
                    </Link>
                </Card.Header>
            </Card>
        </Col>
    );
};

export default Program;