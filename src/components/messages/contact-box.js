import React from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import "./contact-box.scss";
import ContactForm from './contact-form';

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
        </div>
    );
};

export default ContactBox