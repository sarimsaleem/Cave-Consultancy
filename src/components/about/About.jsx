import React from "react";
import "./about.css";
import aboutImg from "../../assets/aboutImg.png";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <section className="about-section" style={{ paddingBlock: "70px" }}>
            <Container>
                <h1 className="component-heading">About Me</h1>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div>
                            <p><span className="special-about-text">HELLO, I’m Shama,</span></p>
                            <p >
                                An Integrative and specialising in children and young people.
                            </p>


                            <p> <b className="bold-tag">“A problem shared is a problem halved” </b> deeply resonates
                                with me. I truly believe in the power of talking and the positive impact
                                sharing one’s feelings can have on mental well-being. As a natural
                                listener, I’ve always found joy in helping others, and being able to do this
                                as part of my profession is incredibly rewarding. There’s nothing more
                                fulfilling than supporting people on their journey to better understand
                                themselves and find meaning in their experiences.</p>
                            <p> <b className="bold-tag">My Practice</b><br />
                                Currently, I divide my time between working as a school counsellor in
                                both primary and secondary settings, providing online counselling for a
                                children’s mental health charity and an adult counselling service, as well
                                as supporting clients in my private practice.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <div className="about-images">
                            <img src={aboutImg} alt="Team Collaboration" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default About;
