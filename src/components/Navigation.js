import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText, Label, DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown, NavLink
} from 'reactstrap';

import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import flag from './assets/nepal.png'



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
            <Navbar className="" expand='sm' id="navbar" style={{ height: '35px', borderStyle: 'groove', borderWidth: '0px 0px 1px 0px', borderColor: '#e6e6e6', backgroundColor: '#000' }} >
                <NavbarBrand>
                    <img src={flag} className="ml-3" alt="user_icon" height="18px" width="20px" style={{ margin: '0px 0px 8px ' }} />
                    <Label style={{ fontSize: '18px', color: '#8c8c8c', paddingLeft: '5px' }}>Nepal</Label>
                </NavbarBrand>

                <Nav className="mr-auto" navbar></Nav>
                <NavLink style={{ color: '#8c8c8c' }} href="/signin">
                    Join/Login to Basemark

                </NavLink>


                <NavbarText >
                    <UncontrolledDropdown direction="down" className="" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav inNavBar>
                            <Link style={{ color: '#8c8c8c', textDecoration: 'none' }}>Help</Link>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/login">Privacy Policy</DropdownItem>
                            <DropdownItem>Contact Us</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavbarText>

                <NavLink >

                    <Link to='/Cart' style={{ color: '#8c8c8c', cursor: 'pointer' }}><FaShoppingCart></FaShoppingCart></Link>
                </NavLink>

            </Navbar>

        )
    }
}
