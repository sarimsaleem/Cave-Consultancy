import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import footerimg1 from "../../assets/1.svg";
import footerimg2 from "../../assets/2.svg";
import footerimg3 from "../../assets/3.svg";
import footerimg4 from "../../assets/4.svg";
import Logo from '../../assets/logo.png';
import "./footer.css";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <>
            <Layout.Footer className="footer" style={{ backgroundColor: '#fff', color: '#626262', padding: '40px 0 0 0' }}>
                <Container>
                    <Row gutter={[16, 16]} style={{ paddingBottom: "30px" }}>
                        <Col xs={24} sm={12} md={12} lg={7}>
                            <Title level={4} style={{ color: '#000' }}>CERTIFICATIONS</Title>
                            <Row gutter={[16, 16]}>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg4} className='footerImg' alt="Cave Safety Certification" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg1} className='footerImg' alt="Speleology Accreditation" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg2} className='footerImg' alt="Environmental Compliance" />
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <img src={footerimg3} className='footerImg' alt="Tourism Development Certified" />
                                </Col>
                            </Row>
                        </Col>

                        {/* Services Section */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: '#000' }}>SERVICES</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Cave Mapping & Exploration</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Risk Assessment & Safety Protocols</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Ecological Preservation Consulting</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Tourism Development</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Underground Infrastructure Planning</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Cave Rescue Training</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Geological Surveying</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Educational Workshops</Text>
                        </Col>


                        {/* Offices Section */}
                        <Col xs={24} sm={12} md={12} lg={5}>
                            <Title level={4} style={{ color: '#000' }}>CAVE EXPERTISE</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Cave Mapping & Exploration</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Speleological Research</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Ecological Preservation</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Tourism Development</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>Risk Assessment & Safety Protocols</Text>
                        </Col>


                        <Col xs={24} sm={12} md={12} lg={6}>
                            <Title level={4} style={{ color: '#000' }}>OUR OFFICES</Title>

                            <Title level={5} style={{ color: '#000', marginBlock: "5px" }}>Vienna</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>Karlsplatz 1, Vienna, Austria 1010</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>T: +43 1 1234567</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>E: info@caveconsulting.com</Text>

                            <Title level={5} style={{ color: '#000' }}>San Francisco</Title>
                            <Text style={{ display: 'block', color: '#626262' }}>500 Terry Francois Blvd, San Francisco, CA 94158</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>T: +1 (415) 555-2671</Text>
                            <Text style={{ display: 'block', color: '#626262' }}>E: info@caveconsulting.com</Text>
                        </Col>
                    </Row>
                    <hr style={{ margin: "0" }} />
                    <div className="footer-container">
                        <div className="footer-links">
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Projects</a>
                            <a href="#">Team</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-icons">
                            <a href="#" className="icon facebook"><FacebookOutlined /></a>
                            <a href="#" className="icon instagram"><InstagramOutlined /></a>
                            <a href="#" className="icon linkedin"><LinkedinOutlined /></a>
                        </div>
                    </div>
                </Container>
            </Layout.Footer>
            <div className="footer-content" style={{ background: "#252525", }}  >
                <Container >
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <Text style={{ color: '#626262' }}>
                                © {new Date().getFullYear()} Cave Consulting. All Rights Reserved.
                            </Text>
                        </div>
                        <div className="footer-logo">
                            <img src={Logo} alt="Cave Consulting Logo" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;
