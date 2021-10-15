import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Program from './Program';
import './Home.css';

//********************************************** Home page **************************************//
const Home = () => {

        ///////////////////////// Home Card Functionality => Fatch data & keep it on state ////////////////////
    const [cards, setCards] = useState ([]);
    useEffect(()=>{
        fetch('./home.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    // console.log(cards)

    return (
        <div className="homeBody">

            {/************************* Display Banner Slider **********************/}
            <Carousel fade variant="dark">
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 height"
                    src="https://static.sportzbusiness.com/uploads/2020/04/Athletes.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Calesthenics</h3>
                    <p className="animate__animated animate__zoomInDown txt">Calisthenics or callisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 height"
                    src="https://media.gq-magazine.co.uk/photos/5d1391fed7a70123aabba24e/16:9/w_2560%2Cc_limit/James-Bond-hp-GQ-22June15_rex_b.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Beach Body</h3>
                    <p className="animate__animated animate__zoomInDown txt">Feel good and get results with easy-to-follow dance moves, resistance training, and a moment of INSANITY-style fitness.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 height"
                    src="https://p4.wallpaperbetter.com/wallpaper/975/326/544/workout-bodybuilder-wallpaper-preview.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Body Building</h3>
                    <p className="animate__animated animate__zoomInDown txt">Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/************************* Display Home Card Components **********************/}
            <Row id="programs" xs={1} md={2} className="g-4 homeCard" >
               {
                    cards.map(card=><Program
                    key={card.id}
                    card={card}
                    ></Program>)
                }
            </Row>

        </div>
    );
};

export default Home;