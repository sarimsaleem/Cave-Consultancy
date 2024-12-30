import React from "react";
import "./blog.css";
import { Button, Container, Row } from "react-bootstrap";

const Blog = () => {
    return (
        <div className="blog-container">
            <h1 className="component-heading">My Services</h1>
            <Container>
                <Row>
                    <div className="blog-parent">
                        <div className="flip flip-vertical">
                            <div className="flip-front">
                                {/* <div className="overlay"> */}
                                    <h3 className="overlay-text">Child Counselling at Cave Counselling</h3>
                                    <Button className="carousel-button">Learn More</Button>
                                {/* </div> */}
                            </div>
                            <div className="flip-back">
                                <h2 className="flip-title">Child Counselling at Cave Counselling</h2>
                                <p className="flip-description">
                                    There’s something magical about caves—their mystery sparks curiosity
                                    and a sense of adventure in children. Just like stepping into a cave,
                                    entering the counselling room invites exploration and discovery. Children
                                    naturally wonder: What will I uncover? What will this journey feel like?
                                </p>
                            </div>
                        </div>
                        <div className="flip flip-vertical">
                            <div className="flip-front">
                                {/* <div className="overlay"> */}
                                    <h3 className="overlay-text">Adult Counselling at Cave Counselling</h3>
                                    <Button className="carousel-button">Learn More</Button>
                                {/* </div> */}
                            </div>
                            <div className="flip-back">
                                <h2 className="flip-title">Adult Counselling at Cave Counselling</h2>
                                <p className="flip-description">
                                    Life can feel overwhelming, at times it may be full of challenges, change,
                                    and uncertainty. You may feel stuck, misunderstood, or unsure where to
                                    turn. Cave Counselling offers you a safe, supportive space where you
                                    can explore your feelings, share your struggles, and reconnect with
                                    yourself.
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;
