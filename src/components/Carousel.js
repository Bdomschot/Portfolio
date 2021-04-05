import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import inspect from '../assets/images/inspect.png'
import food from '../assets/images/Food.png'
import pub from '../assets/images/PubLish.png'
import { Container } from 'react-bootstrap';

function Slider(){
    
        return (
<Container  className="w-responsive text-center mx-auto h-50 p-3 mt-2">
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 mh-75"
      src= {inspect}
      alt="inspectNow"
    />
    <Carousel.Caption className= "text-success">
      <h3>inspectNow</h3>
      <p>Home inspection webapp.</p>
      <a target="_blank" rel="noopener noreferrer" href = "https://inspectnowpod16.herokuapp.com">Heroku</a>
      {' '}
      <a target="_blank" rel="noopener noreferrer" href =  "https://github.com/Bdomschot/inspectNow">Github</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food}
      alt="Food Dad-a-base"
    />

    <Carousel.Caption>
      <h3>Food Dad-a-Base</h3>
      <p>For people who love to cook and also dad jokes.</p>
      <a target="_blank" rel="noopener noreferrer" href = "https://food-dad-a-base.herokuapp.com/login">Heroku</a>
      {' '}
      <a target="_blank" rel="noopener noreferrer" href =  "https://github.com/Bdomschot/food-dadabase">Github</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pub}
      alt="PubLish"
    />

    <Carousel.Caption className= "text-dark">
      <h3>PubLish</h3>
      <p>Create a pub crawl in your town.</p>
      <a target="_blank" rel="noopener noreferrer" href = "https://lauragwendolynburch.github.io/Pub-Lish/">Heroku</a>
      {' '}
      <a target="_blank" rel="noopener noreferrer" href =  "https://github.com/Bdomschot/Pub-Lish">Github</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
            
        )
    }


export default Slider;