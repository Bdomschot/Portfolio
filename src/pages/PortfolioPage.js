import React from 'react';
import Slider from '../components/Carousel';
import Header from '../components/Header';
import Hero from '../components/Hero';

function PortfolioPage (props) {

    return(
        <div>
            <Header/>
         <Hero title={props.title} />
         <Slider />
        </div>
    )
    
}

export default PortfolioPage 