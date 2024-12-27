import React from "react";
import "./about.css";
import treeAbout from "../../assets/treeAbout.png";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <section className="about-section" style={{ paddingBlock: "70px" }}>
            <Container>
                <h1 className="component-heading">About Cave Consulting</h1>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div>
                            <h3>Overview:</h3>
                            <p>
                                Cave Consulting specializes in delivering innovative solutions for businesses,
                                empowering them to achieve their goals with expert guidance.
                            </p>
                        </div>
                        <div>
                            <h3>Story Behind the Name:</h3>
                            <p>
                                The name 'Cave Consulting' is inspired by the concept of exploration and discovery—
                                just as ancient caves hold secrets waiting to be unveiled, we uncover insights to
                                help businesses thrive.
                            </p>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <div className="about-images">
                            <img src={treeAbout} alt="Team Collaboration" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
