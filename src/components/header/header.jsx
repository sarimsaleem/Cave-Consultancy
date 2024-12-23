import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import "./header.css";

const Header = ({ bgColor }) => {
    const [scrolled, setScrolled] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgClass = {
        transparent: 'navbar-transparent',
        white: 'navbar-white',
        blue: 'navbar-blue'
    }[bgColor] || 'navbar-transparent';

    return (
        <Navbar expand="lg" className={`${scrolled ? 'navbar-scrolled' : ''} ${bgClass}`}>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>
                    <img className='logo' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact")}>Blog</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact")}>Features</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
                        <Button className='consultation-btn' onClick={() => navigate("/consultation")}>
                            Book A Consultation
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
