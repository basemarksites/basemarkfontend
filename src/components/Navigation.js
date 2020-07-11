import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText
} from 'reactstrap';


import { Redirect, Link } from 'react-router-dom';
import basemark from './assets/basemarklogo.png'

export default function Navigation() {
    return (
        <Navbar color='light' expand='sm' id="navbar">
            <NavbarBrand href='/'>
                <img src={basemark} className="imguser" alt="basemark_icon" 
                style={{ margin: '0px 0px 0px 100px' }} height='30px'  />
            </NavbarBrand>
            <Nav className="mr-auto" navbar style={{float:'right', margin:'0px 0px 0px 800px'}}> Contact Us 014385316</Nav>
         
        </Navbar>


    )
}
