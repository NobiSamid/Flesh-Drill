import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Product.css";

//********************************************** Shop Product component **************************************//
const Product = (props) => {

  //************************* Shop Now Data Destructuring **********************//
    const { title, image, color, gender, size } = props.product || {};
    return (

      //************************* Shop Product Single Card **********************//
        <Card>
          <Card.Header as="h5">For {gender}</Card.Header>
          <Card.Body>
            <Card.Title className="cardText">{title}</Card.Title>
              <div className="horizontal">
                <div className="cardText">
                  <Card.Text>
                    Color: {color}
                  </Card.Text>
                  <Card.Text>
                    Size: {size}
                  </Card.Text>
                  <Button>Buy now</Button>
                </div>
                <div>
                  <img className='imgEdit' src={image} alt="Thumbnail"></img>
                </div>
              </div>
          </Card.Body>
        </Card>
    );
};

export default Product;