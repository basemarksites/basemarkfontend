import React, { Component } from 'react'

import {
    Navbar,
    NavbarBrand,
    Nav,
    Collapse, NavbarToggler
} from 'reactstrap';

import { Redirect, Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            user: {},
            name: '',

        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="light" expand='lg' id="navbar" style={{ height: '60px' }} >
                    <NavbarBrand href='/'>
                        <h5 style={{ color: '#CA4040', fontWeight: 'inherit', fontSize:'25px'}} className="ml-2">BASEMARK</h5>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} style={{ color: '#000' }} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar></Nav>
                        <Nav className="mr-5" navbar><Link to='/mensProducts' style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>MEN</Link></Nav>
                        <Nav className="mr-5" navbar><Link to='/womensProducts' style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>WOMEN</Link></Nav>

                        <Nav className="mr-5" navbar><Link to='/kidsProducts' style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>KIDS</Link></Nav>
                        <Nav className="mr-auto" navbar><Link to='/allProducts' style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>PRODUCTS</Link></Nav>
                    </Collapse>


                </Navbar >


            </div>
        )
    }
}
















