import React, { Component } from 'react'
import axios from 'axios'
import {
    Navbar,
    NavbarBrand,
    Nav,
    FormGroup, Input, FormText, Form,
    NavbarText, Label, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown
} from 'reactstrap';

import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { GrFavorite } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md'


import { Redirect, Link } from 'react-router-dom';



export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter() {
        this.setState({ dropdownOpen: true });
    }

    onMouseLeave() {
        this.setState({ dropdownOpen: false });
    }










    render() {



        return (
            <Navbar className="" color='faded' expand='sm' id="navbar" style={{ height:'40px',borderStyle: 'groove', borderWidth: '0px 0px 1px 0px', borderColor: '#e6e6e6' }} >
                <NavbarBrand>
                    <Link style={{ fontSize: '15px', color: '#8c8c8c' }} to="/login">Join/Log In to Basemark</Link>
                    <Label style={{ color: '#8c8c8c', padding: '0px 5px 0px 5px' }}>|</Label>
                    <Link style={{ fontSize: '15px', color: '#8c8c8c' }}>Help</Link>

                </NavbarBrand>
                
                <Nav className="mr-auto" navbar></Nav>
                <NavbarText >
                    <Link className=""><FaShoppingCart></FaShoppingCart></Link>
                </NavbarText>

                <NavbarText >
                    <Link style={{color:'#000'}} className=""><GrFavorite></GrFavorite></Link>
                </NavbarText>


                <NavbarText style={{color:'#000'}}>
                    <UncontrolledDropdown className=""  onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav inNavBar>
                            <Link><FaUserCircle></FaUserCircle></Link>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavbarText>


                <NavbarText className="">
                    <MdLocationOn></MdLocationOn> Kathmandu, Nepal
                </NavbarText>
            </Navbar>

        )
    }
}
