import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';
import me from '../assets/images/photo.jpg'
import Header from '../components/Header';

function HomePage(props) {

    
    return (
        <div className = "bg text-muted" >
            <Header/>
            <Hero title={props.title} className = "text-muted"/>
            <Container fluid={true} >
               <Row className="justify-content-around">
                    <img src={me} alt="Benjamin Domschot" />
                <p className = "text-muted"> 
                    Hello my name is Benjamin Domschot, I am a recent graduate of University of Washington full stack web developer boot camp. 
                    As a father of two looking to change careers, I have always had an interest in coding. 
                    I am now seeking new employment utilizing the skill I learned and 
                    looking to expand my skills into other areas of computer programming.
                </p>
                </Row>
            </Container>
        </div>
    )
 
}

export default HomePage