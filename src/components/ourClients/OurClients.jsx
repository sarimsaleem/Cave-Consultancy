import React from 'react';
import Slider from "react-slick";
import "./ourClients.css";
import client1 from "../../assets/ourCliennts1.png";
import client2 from "../../assets/ourCliennts2.png";
import client3 from "../../assets/ourCliennts3.png";
import client4 from "../../assets/ourCliennts4.png";
import client5 from "../../assets/ourCliennts5.png";
import client6 from "../../assets/ourCliennts6.png";
import client7 from "../../assets/ourCliennts7.png";
import client8 from "../../assets/ourCliennts8.png";
import client9 from "../../assets/ourCliennts9.png";
import { Col, Container, Row } from 'react-bootstrap';

const OurClients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const clients = [
        { src: client1, title: 'Adamjee Engineering' },
        { src: client2, title: 'Government of Sindh' },
        { src: client3, title: 'Gagan Textile Industries' },
        { src: client4, title: 'Reon Energy Limited' },
        { src: client5, title: 'Bari' },
        { src: client6, title: 'Modern Terminal Operators Group' },
        { src: client7, title: 'Dynamic Shipping Group' },
        { src: client8, title: 'Supereme Council Of All Pakistan Transporters' },
        { src: client9, title: 'Global Connect' },
    ];


    return (
        <div className="ourClients-parent">
            <h1 className="component-heading">Our Clients</h1>
            <Container>
                <Row>
                    <Col  >
                        <Slider {...settings}>
                            {clients.map((client, index) => (
                                <div className="client-item" key={index}>
                                    {/* <Col xs={12} sm={12} md={12} lg={12}> */}
                                    <img src={client.src} alt={`Client ${index + 1}`} className="client-logo" />
                                    <p className="client-title">{client.title}</p>
                                    {/* </Col> */}
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurClients;
