import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';


function Footer() {

    return (
        <footer className="d-block mt-5" >
            <Container style={{backgroundColor: 'transparent'}} fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-o" md={3} sm={12}>
                    <a className='text-link' href="mailto:bdomschot@gmail.com">Questions or comments.</a>
                    </Col>
                    <Col className="padding-0  justify-content-end" md={3} sm={12}>
                    <a className='text-link' href="https://github.com/Bdomschot">More information on my projects.</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;