import React from 'react';
import Slider from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

function PortfolioPage (props) {

    return(
        <div className = "bg text-light"> 
        <Header/>
         <Hero title={props.title} />
         <Slider />
         <Footer/>
        </div>
    )
    
}

export default PortfolioPage 