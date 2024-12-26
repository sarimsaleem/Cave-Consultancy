import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';
import { Typography } from 'antd';
import contactImage from "../../assets/contact.png"

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required.').min(3, "Minimum three words required"),
    email: Yup.string().email('Invalid email format').required('Email is required.'),
    contact: Yup.string()
        .matches(/^\d+$/, 'Contact must be a valid number.')
        .required('Contact number is required.'),
    address: Yup.string().required('Address is required.'),
    message: Yup.string().required('Message cannot be empty.'),
});

const Contact = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="contact-parent">
            <Container>
                <h1 className='text-center contact-heading'>Get In Touch</h1>
                <p className='text-center contact-para'>If you have any questions, feel free to reach out to us!</p>
                <Row>
                    <Col md={6}>
                        <div className="contact-info">
                            <img
                                src={contactImage}
                                alt="Contact Information"
                                className="contact-image"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                contact: '',
                                address: '',
                                message: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    {/* First Row: Name and Email */}
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <Typography className="mt-3">Name <sup>*</sup></Typography>
                                                <Field type="text" name="name" className="form-control" placeholder="John Doe" />
                                                <ErrorMessage name="name" component="div" className="text-danger" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <Typography className="mt-3">Email <sup>*</sup></Typography>
                                                <Field type="email" name="email" className="form-control" placeholder="Email@example.com"  />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* Second Row: Contact and Address */}
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <Typography className="mt-3" style={{fontSize:"13px"}}>Contact No <sup>*</sup></Typography>
                                                <Field type="text" name="contact" className="form-control" placeholder="12345789"/>
                                                <ErrorMessage name="contact" component="div" className="text-danger" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group">
                                                <Typography className="mt-3">Address <sup>*</sup></Typography>
                                                <Field type="text" name="address" className="form-control" placeholder="Address" />
                                                <ErrorMessage name="address" component="div" className="text-danger" />
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* Third Row: Message */}
                                    <Row>
                                        <Col>
                                            <div className="form-group">
                                                <Typography className="mt-3">Message <sup>*</sup></Typography>
                                                <Field as="textarea" rows="4" name="message" className="form-control" 
                                                placeholder="Write your message here!"/>
                                                <ErrorMessage name="message" component="div" className="text-danger" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Button variant="primary" type="submit" className="mt-4 contact-btn">
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Contact;
