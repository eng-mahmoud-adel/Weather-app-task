import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="#26293A" expand="lg">
            <Nav className="ml-auto flex-column mt-4">
                <Link to="/" className="py-5 font-weight-bold">Home</Link>
                <Link to="/weather" className="py-4 font-weight-bold">Weather</Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
