import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./contact-box.scss";
import ContactForm from './contact-form';
import AllMessages from './all-messages';

const ContactBox = () => {
    return (
        <div className="contact-container">
            <Container>
                <Card>
                    <Card.Body>
                        <Row className="g-6">
                            <Col md={12}>
                                <ContactForm />
                            </Col>                            
                        </Row>
                    </Card.Body>
                </Card>
            </Container>  
            <Container>
                          
                          <Button className='mt-5'
                                onClick={() =>{
                                    <AllMessages/>
                                }}>  All Messages                
                                    
                            </Button>
                          </Container>         
        </div>
    );
};

export default ContactBox