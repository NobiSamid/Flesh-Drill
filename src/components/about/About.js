import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import "./About.css"

//********************************************** About Us Page **************************************//
const About = () => {
    return (
        <div>

        {/************************* Display Navigation Bar **********************/}
            <NavBar></NavBar>

            {/************************* Aboyut us => Mission part **********************/}
            <div className="mission">
                <img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1920/c_fill,w_1010,h_568/q_auto,f_auto/redbullcom/2019/10/15/82bbee23-844f-4576-8274-74f74538b8d2/calisthenics-park-steel-warriors" alt="Calesthenic-cover"></img>
                <h1>Our Mission</h1>
                <p>
                    Human body is a wonderfull creature of God. It has so much ability that you can't imagine.Most of us are well aware of the many health benefits of exercise, but finding the discipline to not only start training but to also stick with it is often the hard part.
                    Whether you’re at the beginning of your fitness journey or in desperate need of some motivation to keep going, you’ll find it on these blogs — and in their educational, inspirational, and empowering content. Our main job is to make everyones body look and works good
                </p>
            </div>

            {/************************* About us => Vision part **********************/}
            <div className="vision">
                <img src="https://warrioracademyhk.com/wp-content/uploads/2019/07/2018-06-11-PHOTO-00000059.jpg" alt="vission cover" ></img>
                <h1>Our Vision</h1>
                <p>
                    The world of bodyweight calisthenics is changing. I believe people are getting sick of spending money at the gym and pumping iron the way Arnold and Jack Lalanne used to do. They are looking for alternatives.

                    Yet is the answer found in doing a bunch of push ups and no-weight squats?

                    Calisthenics skill-based exercises have grown in popularity. People like Hannibal for King, Denis Minin and Hit Richards have found large followings because they can do planches, handstand push ups and front levers (and of course because they have great physiques).

                    But is this the extent of bodyweight calisthenics…cranking out a bunch of super challenging moves? Sure its inspiring to see a bunch of dudes in the park doing something like this… but what’s next?
                </p>
            </div>

            {/************************* Aboyut us => Team Details **********************/}
            <div className="team">
                <h1>Team Members</h1>
                <div className="members">
                    <div className="member">
                        <h5>Sami</h5>
                    </div>
                    <div className="member">
                        <h5>Nobi</h5>
                    </div>
                    <div className="member">
                        <h5>Lam</h5>
                    </div>
                    <div className="member">
                        <h5>Polok</h5>
                    </div>
                    <div className="member">
                        <h5>Nahid</h5>
                    </div>
                    <div className="member">
                        <h5>Mormo</h5>
                    </div>
                    <div className="member">
                        <h5>Hamim</h5>
                    </div>
                    <div className="member">
                        <h5>Mohaddis</h5>
                    </div>
                </div>
            </div>

            {/************************* Display Footer **********************/}   
            <Footer></Footer>
        </div>
    );
};

export default About;