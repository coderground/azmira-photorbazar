import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card/Card';
import './Home.css';



const Home = () => {
    const[card,setCard]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setCard(data));
    },[])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/503cd08224ac9df583cd7c6f/1583254325713-9VLZRD4HUMEBRFWIAQU8/LettieriPhoto_PA_WeddingPhotography_71.jpg?format=1500"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>“As the days go by, I am even more blown away by the photographs of our wedding. I always knew that they would be special, but not quite like this. I never had any idea about what kind of wedding I would have or who I would marry, but I always knew that you would be behind the camera lens. That day was absolutely perfect and I definitely owe much of it to you. I guess my only challenge is figuring out how to hang 100 pictures on our walls!”
                        </h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://images.squarespace-cdn.com/content/v1/503cd08224ac9df583cd7c6f/1582782793333-CBOA1ECLJMV8DUHJHKDJ/LettieriPhoto_PA_WeddingPhotography_01.jpg?format=1500w"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>“What a phenomenal experience! We contacted and hired Rob via Facetime. Rob and his crew nailed it. The pictures turned out amazing. Too good actually... the hardest part was narrowing our photographs down for our wedding book!”</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/503cd08224ac9df583cd7c6f/1509557241587-X4Y885WYO7WDAQXQ14HK/scranton_wedding_photographer_lettieri_pa+%282+of+28%29.jpg?format=1500w"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>“Rob and his team are extraordinary in kindness, response time, creativity, professionalism, and value. The quality of their photography and cinematography are amazing! We absolutely love our premium Italian wedding photo book.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <h3 className='mt-5 pt-5 pb-3'>OUR SERVICES</h3>


            <div className='card-group container w-75 gap-4'>
           
           
                {
                    card.map(cards => <Card
                    key={cards.id}
                    cards = {cards}
                    ></Card>)
                }
            </div>

            <footer className='footer mt-5 p-5'>
                <h5>Studio 1610 Wyoming Avenue, Scranton, PA, 18509, USA 570.498.3686 inquiry@lettieriphoto.com</h5>
                <h6>Copyright 2022 AzmiraPhotography</h6>
            </footer>
        </div>
    );
};

export default Home;