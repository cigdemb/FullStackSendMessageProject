import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const API_URL = "http://localhost:8085/app";

const AllMessages = () => {

    const [messages, setMessages] = useState([]);

    const fetchAllMessages = async() => {
        const response = await fetch(`${API_URL}/contactMessages/getAll`,
        {
            method: 'GET',           
        } );
        const data = await response.json();
        console.log(data)
        setMessages(data)      
    
    }
  return (
    <div>
        <h3 style={{ textAlign: "center" }}>Messages</h3>
       
    <Row>
        {messages.map((item) => (
            <Col md={6} lg={4} key={item.subject}>
                
                    <Card>
                        <Card.Body>{item.subject}</Card.Body>
                    </Card>
                
            </Col>
        ))}

        </Row>
    
    </div>
  )
}

export default AllMessages