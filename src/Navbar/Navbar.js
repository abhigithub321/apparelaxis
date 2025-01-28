import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
// import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';


const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <BootstrapNavbar bg="light" expand="lg" className="shadow-sm" id="navbar">
                <Container>
                    {/* Logo Section */}
                    <img src="./Images/social.png" id="shoplogo"></img>
                    <BootstrapNavbar.Brand href="/" id="logo">ApparelAxis</BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        {/* Navigation Links */}
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                        {/* Search Bar */}
                        <div className="search-container">
                            <input type="text" placeholder="Search for products..." />
                        </div>

                        <div id="cartdic">
                        <Button id="cart-btn">
                                <a  id="cartlogo">
                                    <img src="./Images/shopping.png" alt="cart" style={{ width: '40px', height: '40px' }} />
                                </a>
                        </Button>
                        </div>
                        {/* User Section with Profile Dropdown and Cart */}
                        <div className="profilrDropdown">
                            {/* Profile Dropdown */}
                            <NavDropdown
                                title={<i className="bi bi-person" style={{ fontSize: '40px' }}></i>}
                                id="profile-dropdown"
                                show={dropdownOpen}
                                onClick={toggleDropdown}
                                className="profile"
                            >
                                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#signin">Sign In</NavDropdown.Item>
                                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </>
    );
};

export default Navbar;
