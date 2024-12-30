import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';
import { Typography } from 'antd';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required.').min(2, "Minimum two characters required."),
    lastName: Yup.string().required('Last Name is required.').min(2, "Minimum two characters required."),
    email: Yup.string().email('Invalid email format').required('Email is required.'),
    subject: Yup.string().required('Please select a subject.'),
    message: Yup.string().required('Message cannot be empty.'),
});

const Contact = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="contact-parent">
            <Container>
                <h1 className="component-heading" style={{ marginBottom: "20px" }}>Get In Touch</h1>
                <p className="text-center contact-para">If you have any questions, feel free to reach out to us!</p>
                <Row>
                    <div className="contact-subparent">
                        <Col md={8}>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    subject: '',
                                    message: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Typography className="mt-3">First Name <sup>*</sup></Typography>
                                                    <Field type="text" name="firstName" className="form-control" placeholder="John" />
                                                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Typography className="mt-3">Last Name <sup>*</sup></Typography>
                                                    <Field type="text" name="lastName" className="form-control" placeholder="Doe" />
                                                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* Second Row: Email and Subject */}
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Typography className="mt-3">Email <sup>*</sup></Typography>
                                                    <Field type="email" name="email" className="form-control" placeholder="Email@example.com" />
                                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Typography className="mt-3">Subject <sup>*</sup></Typography>
                                                    <Field as="select" name="subject" className="form-control">
                                                        <option className='contact-dropdawn' value="Select a subject">Select a subject</option>
                                                        <option className='contact-dropdawn' value="general">General Inquiry</option>
                                                        <option className='contact-dropdawn' value="support">Support</option>
                                                        <option className='contact-dropdawn' value="feedback">Feedback</option>
                                                        <option className='contact-dropdawn' value="other">Other</option>
                                                    </Field>
                                                    <ErrorMessage name="subject" component="div" className="text-danger" />
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* Message */}
                                        <Row>
                                            <Col>
                                                <div className="form-group">
                                                    <Typography className="mt-3">Message <sup>*</sup></Typography>
                                                    <Field as="textarea" rows="4" name="message" className="form-control" placeholder="Write your message here!" />
                                                    <ErrorMessage name="message" component="div" className="text-danger" />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" type="submit" className="contact-btn">
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
