import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./contact-box.scss";
import ContactForm from './contact-form';
import AllMessages from './all-messages';

const ContactBox = () => {
    const [currentOperation, setCurrentOperation]= useState("");
    const [refreshKey, setRefreshKey] = useState(0);

    const getAllMessages= ()=> {
    setCurrentOperation("getAll");
    setRefreshKey(refreshKey + 1);
  }
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
            
        <Button className="mt-5" onClick={()=>getAllMessages()}>
          All Messages
        </Button>
        {currentOperation==="getAll" && <AllMessages refreshKey={refreshKey}/>}
      </Container>    
        </div>
    );
};

export default ContactBox