import React from "react";
import "./blog.css";
import { Container, Row } from "react-bootstrap";

const Blog = () => {
    return (
        <div className="blog-container">
            <h1 className="component-heading">My Services</h1>
            <Container>
                <Row>
                    <div className="blog-parent">
                        <div className="flip flip-vertical">
                            <div
                                className="flip-front"
                                style={{
                                    backgroundImage:
                                        "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
                                }}
                            ></div>
                            <div className="flip-back">
                                <h2 className="flip-title">Children &amp; Young people</h2>
                                <p className="flip-description">
                                    There’s something magical about caves—their mystery sparks curiosity
                                    and a sense of adventure in children. Just like stepping into a cave,
                                    entering the counselling room invites exploration and discovery. Children
                                    naturally wonder: What will I uncover? What will this journey feel like?
                                </p>
                            </div>
                        </div>
                        <div className="flip flip-vertical">
                            <div
                                className="flip-front"
                                style={{
                                    backgroundImage:
                                        "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
                                }}
                            ></div>
                            <div className="flip-back">
                                <h2 className="flip-title">Adults</h2>
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
