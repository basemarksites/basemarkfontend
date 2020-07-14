import React from 'react'

import {
    Navbar,
    NavbarBrand,
    Nav,
    FormGroup, Input, FormText, Form,
    NavbarText, Button
} from 'reactstrap';

import { Redirect, Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <Navbar color='light' expand='lg' id="navbar">
            <NavbarBrand href='/'> </NavbarBrand>

            <Nav className="mr-auto" href='/' navbar>HOME</Nav>
            <Nav className="mr-auto" href='/' navbar><Link to="/allProducts">ALL PRODUCTS</Link></Nav>

            <Link to="/login">
                <Button color='success' size='md' style={{ color: '#fff', padding: '8px 30px 8px 30px' }} >Login</Button>
            </Link>
        </Navbar>
    )
}
