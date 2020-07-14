import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button
} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { FaCommentsDollar } from 'react-icons/fa';
import { withRouter } from 'react-router';


export default class LoggedinNavbar extends Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    
        this.state = {
            user: null,
            username:'',
            fullName:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
        
    }
    
        componentDidMount() {

            axios.get('http://localhost:3001/users/myProfile', this.state.config)
            .then((response) => {
                this.setState({
                    fullName: response.data.fullName
                })
               
            });
          
        }
        handleLogout = () => {
            
            localStorage.removeItem('token');
            localStorage.clear();
            if(localStorage.getItem('token') == null){
                this.props.history.push('/login');

            }
            
          }
      
       
       
    
    
   
    render() {
        console.log(this.state.fullName)
        return (
            <div>
                 
                 <Navbar color='light' expand='lg' id="navbar">
            <NavbarBrand href='/'> </NavbarBrand>

            <Nav className="mr-auto" href='/' navbar>HOME</Nav>
            <Nav className="mr-auto" href='/' navbar><Link to="/allProducts">ALL PRODUCTS</Link></Nav>
          
            <UncontrolledDropdown>
          
            
          <DropdownToggle tag="a" className="nav-link" caret>
         
          {this.state.fullName}
          </DropdownToggle>
          <DropdownMenu>
          <a  type="button" classNAME="WARNING"onClick={this.handleLogout}>Logout</a>
     
          </DropdownMenu>
         
        </UncontrolledDropdown>
           
            
     </Navbar>
         
            </div>
        )
    }
}
