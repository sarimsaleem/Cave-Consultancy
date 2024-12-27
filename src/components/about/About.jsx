import React from "react";
import "./about.css";
import treeAbout from "../../assets/treeAbout.png";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <section className="about-section" style={{ paddingBlock: "70px" }}>
            <Container>
                <h1 className="component-heading">Cave Consulting</h1>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div>
                            <h3>About</h3>
                            <p>
                                Cave Consulting is a forward-thinking consultancy firm dedicated to providing tailored solutions that help businesses thrive. With a focus on innovation,<b className="bold-tag"> strategic guidance, and industry expertise,</b> we empower organizations to navigate challenges, optimize performance, and unlock new growth opportunities.
                            </p>
                            <p> Our team of <b className="bold-tag"> experienced consultants</b> works closely with clients to understand their unique needs, offering practical advice and actionable strategies that lead to measurable results. <b className="bold-tag">Whether you're looking to streamline operations</b>, improve customer engagement, or expand into new markets, Cave Consulting is here to guide you every step of the way.</p>
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
