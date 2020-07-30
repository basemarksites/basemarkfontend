import React, { Component } from 'react'
import axios from 'axios';

import './styleFiles/signup.css'


import Navigation from './Navigation'
import NavigationBar from './NavigationBar'

import { FaFacebookSquare, FaInstagram, FaGooglePlus, FaYoutube } from 'react-icons/fa';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'




export default class SigninAndSignup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            cpassword: '',
            username: '',
            isRegistered: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/users/signup', this.state)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                this.setState({
                    fullName: '',
                    phone: '',
                    address: '',
                    email: '',
                    password: '',
                    cpassword: '',
                    username: '',
                    isRegistered: true
                })
            })
    }

    render() {

        if (localStorage.getItem('token')) {
            return <Redirect to='/home' />
        }
        return (
            <div>

                <Navigation></Navigation>
                <NavigationBar></NavigationBar>

                <div className="main-division">
                    <h3 className="h3-heading">Welcome to basemark</h3>
                    <div className="contains">
                        <div className="row">
                            <div className="col"></div>

                            <div class="overlaypanel overlayleft">
                                <h1 className="heading-welcome">Welcome Back!</h1>
                                <p className="paragraph">To keep connected with us please sign in with your personal info</p>
                                <Link to="/signin"> <button className="ghost" id="signIn" onClick={this.clickSignInButton}>Sign In</button></Link>
                            </div>

                            <div className="col">
                                <div className="formContainer signupContainer">
                                    <form action="#" className="sigup-form">
                                        <h3 className="heading-signup">Create account</h3>
                                        <div class="social-container">
                                            <a><FaFacebookSquare className="icons" className="social-media"></FaFacebookSquare></a>
                                            <a><FaInstagram className="icons" className="social-media"></FaInstagram></a>
                                            <a> <FaGooglePlus className="icons" className="social-media"></FaGooglePlus></a>
                                        </div>
                                        <span style={{ fontSize: '15px' }}>or use your email for sign up</span>

                                        <FormGroup style={{ marginTop: '10px' }}>
                                            <Input type="text" name="fullName" className="form-input" id="fullName" placeholder="Full name" value={this.state.fullName}
                                                onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup style={{}}>
                                            <Input type="text" name="address" className="form-input" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup >
                                            <Input type="text" name="email" className="form-input" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup >
                                            <Input type="text" name="phone" className="form-input" id="phone" placeholder="Phone number" value={this.state.phone} onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup >
                                            <Input type="text" name="username" className="form-input" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Input type="text" name="password" className="form-input" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Input type="text" name="cpassword" className="form-input" id="cpassword" placeholder="Confirm password " value={this.state.cpassword} onChange={this.handleChange} />
                                        </FormGroup>

                                        <button className="button" onClick={this.handleSubmit}>Sign Up</button>
                                    </form>
                                </div>


                            </div>

                        </div>

                    </div>






                </div>
            </div>
        )
    }
}
