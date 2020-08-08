import React, { Component } from 'react'
import axios from 'axios';

import './styleFiles/signin.css'


import Navigation from './Navigation'
import NavigationBar from './NavigationBar'

import { FaFacebookSquare, FaInstagram, FaGooglePlus, FaYoutube } from 'react-icons/fa';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Footer from './Footer';




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
            isLoggedIn: false,
            role: '',



        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSignInSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/users/login', this.state)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                this.setState({
                    role: response.data.role
                })
            }).catch((err) => console.log(err.response))
    }



    render() {
        // const signUpButton = document.getElementById('signUp');
        // const signInButton = document.getElementById('signIn');
        // const container = document.getElementById('container');

        // if (signUpButton) {
        //     signUpButton.addEventListener('click', () => {
        //         container.classList.add("right-panel-active");
        //     })
        // }

        // if (signInButton) {
        //     signInButton.addEventListener('click', () => {
        //         container.classList.remove("right-panel-active");
        //     })
        // }
        if (this.state.role === 'admin') {
            return <Redirect to='/dashboard' />
        } else if (this.state.role === 'customer') {
            return <Redirect to='/home' />

        }

      

        return (
            <div>

                <Navigation></Navigation>
                <NavigationBar></NavigationBar>

                <div className="main-div">

                    <h3 className="heading-basemark">Welcome to basemark</h3>
                    <div className="containers" id="container">
                        <div class="form-container sign-up-container">
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

                                <button className="button" onClick={this.handleSignUpSubmit}>Sign Up</button>
                            </form>
                        </div>
                        <div class="form-container sign-in-container">
                            <form action="#" className="sigin-form">
                                <h3 className="heading-signin">Sign in</h3>
                                <div class="social-container">


                                    <a><FaFacebookSquare className="icons" className="social-media"></FaFacebookSquare></a>
                                    <a><FaInstagram className="icons" className="social-media"></FaInstagram></a>
                                    <a> <FaGooglePlus className="icons" className="social-media"></FaGooglePlus></a>

                                </div>
                                <span style={{ fontSize: '15px' }}>or use your account</span>

                                <FormGroup style={{ marginTop: '13px' }}>
                                    <Input type="text" name="username" className="form-input" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Input type="password" name="password" className="form-input" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>

                                <Link to='/recoverpassword' className="forgot-password">Forgot your Password? </Link>

                                <button onClick={this.handleSignInSubmit} className="button">Sign In</button>
                            </form>
                        </div>
                        <div class="overlay-container">
                            <div class="overlay">

                                <div class="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Don't have an account?</p>
                                    <p style={{ marginTop: '-14px' }}>No worries, enter your details and register here !</p>

                                    <Link to="/signup"> <button class="ghost" id="signUp" >Sign Up</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <footer>
                        <p>
                            Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
                    </footer> */}
                </div>

                <Footer></Footer>
            </div>
        )
    }
}