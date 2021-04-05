import React from 'react';
import Hero from '../components/Hero';
import Resume from "../assets/images/Resume.pdf";
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer'

function ResumePage (props) {

    return(
        <div className = "bg text-light h-auto">
        <Header/>
         <Hero title={props.title} />
         <Container className="justify-content-center h-100">
            <iframe title = "Resume" src = {Resume} width ="80%" height= "100%" ></iframe>
         </Container>
         <Footer />
         </div>
        
    )
}

export default  ResumePage