import React, { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FiMail, FiMessageSquare, FiSend, FiTag, FiUser } from "react-icons/fi";
import "./contact-form.scss";
import { checkFormikField } from '../helpers/functions/forms';
import ButtonSpinner from '../helpers/button-spinner/button-spinner';
import { swalToast } from '../helpers/functions/sweetalert';

const API_URL = "http://localhost:8085/app";

const ContactForm = () => {

    const [loading, setLoading] = useState(false);

    const initialValues = {
        email: "",
        message: "",
        name: "",
        subject: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Enter your email address"),
        message: Yup.string()
            .max(200, "Message must be at most 200 characters")
            .min(20, "Message must be at least 20 characters")
            .required("Enter your message"),
        name: Yup.string().required("Enter your name"),
        subject: Yup.string()
            .max(50, "Subject must be at most 50 characters")
            .min(5, "Subject must be at least 5 characters")
            .required("Enter the subject of the message"),
    });

    const onSubmit = async (values) => {
        setLoading(true);
        console.log(values)
        try {
            await fetch(`${API_URL}/contactMessages/save`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(values)
            });
            formik.resetForm();
            swalToast(
                "Your message has been sent successfully",
                "success"
            );
        } catch (error) {
            console.log(error);
            swalToast(
                "Something went wrong! Your message couldn't be send",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

  return (
   
    <Form
    className="contact-form-container"
    noValidate
    onSubmit={formik.handleSubmit}>
    <h2> We're Here to Listen</h2>
    <Row className="g-4">
        <Col md={6}>
            <InputGroup>
                <InputGroup.Text>
                    <FiUser />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Your Name"
                    {...formik.getFieldProps("name")}
                    {...checkFormikField(formik, "name")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                </Form.Control.Feedback>
            </InputGroup>
        </Col>
        <Col md={6}>
            <InputGroup>
                <InputGroup.Text>
                    <FiMail />
                </InputGroup.Text>
                <Form.Control
                    type="email"
                    placeholder="Email address"
                    {...formik.getFieldProps("email")}
                    {...checkFormikField(formik, "email")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>
            </InputGroup>
        </Col>
        <Col xs={12}>
            <InputGroup>
                <InputGroup.Text>
                    <FiTag />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Subject"
                    {...formik.getFieldProps("subject")}
                    {...checkFormikField(formik, "subject")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.subject}
                </Form.Control.Feedback>
            </InputGroup>
        </Col>
        <Col xs={12}>
            <InputGroup>
                <InputGroup.Text>
                    <FiMessageSquare />
                </InputGroup.Text>
                <Form.Control
                    as="textarea"
                    placeholder="Enter your message"
                    {...formik.getFieldProps("message")}
                    {...checkFormikField(formik, "message")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.message}
                </Form.Control.Feedback>
            </InputGroup>
        </Col>
    </Row>
        <Button
            type="submit"
            className="mt-5"
            disabled={loading || !(formik.dirty && formik.isValid)}>
            {loading ? <ButtonSpinner /> : <FiSend />} Send
        </Button>
</Form>
        
                     
                    
                    
  )        
}

export default ContactForm