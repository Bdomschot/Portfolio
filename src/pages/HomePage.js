import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';
import me from '../assets/images/photo.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col } from 'react-bootstrap';

function HomePage(props) {

    
    return (
        <div className = "bg h-auto text-light" >
            <Header/>
            <Hero title={props.title} />
            <Container className= "vh-100" fluid={true} >
               <Row className=" d-inline justify-content-around">
                    <img className= "float-left m-3" src={me} alt="Benjamin Domschot" />
                    <Col xs={7}>
                    <p className= "p-3"> 
                    Hello my name is Benjamin Domschot, I am a recent graduate of University of Washington full stack web developer boot camp. 
                    As a father of two looking to change careers, I have always had an interest in coding. 
                    I am now seeking new employment utilizing the skill I learned and 
                    looking to expand my skills into other areas of computer programming.
                    </p>                    
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
 
}

export default HomePage