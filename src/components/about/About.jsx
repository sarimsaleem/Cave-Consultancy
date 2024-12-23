import React from "react";
import "./about.css";
import treeAbout from "../../assets/treeAbout.png"
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
    return (
        <section className="about-section">
            <Container>
                <h1>About Cave Consulting</h1>
                <Row>
                    <Col>
                        <h3>Overview:</h3>
                        <p>
                            Cave Consulting specializes in delivering innovative
                            solutions for businesses, empowering them to achieve their goals with expert
                            guidance.
                        </p>
                        <p>
                            <strong>Story Behind the Name:</strong> The name 'Cave Consulting' is inspired
                            by the concept of exploration and discovery—just as ancient caves hold secrets
                            waiting to be unveiled, we uncover insights to help businesses thrive.
                        </p>
                        <p>
                            <strong>Mission & Vision:</strong> Our mission is to provide tailored
                            consulting services that drive meaningful impact. Our vision is to become a
                            trusted partner for businesses navigating complex challenges.
                        </p>
                    </Col>
                    <Col>
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
