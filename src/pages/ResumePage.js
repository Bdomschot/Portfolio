import React from 'react';
import Hero from '../components/Hero';
import Resume from "../assets/images/Resume.pdf";
import { Container } from 'react-bootstrap';
import Header from '../components/Header';

function ResumePage (props) {

    return(
        <div className = "bg">
            <Header/>
         <Hero title={props.title} />
         <Container className="justify-content-center">
         <a href={Resume} download="Resume.pdf" style={{color:"black", fontSize:"25px" }}>Download</a>
         </Container>
         </div>
        
    )
}

export default  ResumePage