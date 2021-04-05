import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Header from '../components/Header';

function ContactPage() {

    
        return (
            <div className= "bg">
                <Header/>
                <Hero />
                <Content>
                    <Container fluid={true}>
                        <Row className="border-top justify-content-between p-3">
                            <a className='text-link' href="mailto:bdomschot@gmail.com" target="blank"  rel="noopener noreferrer">Email</a>
                            <a className='text-link' href="https://github.com/Bdomschot" target="blank"  rel="noopener noreferrer">Github</a>
                            <a className='text-link' href="https://www.linkedin.com/in/benjamin-domschot-94b0321a1/" target="blank"  rel="noopener noreferrer">Linkedin</a>
                        </Row>
                    </Container>
                </Content>
            </div>
        )
    
};

export default ContactPage;