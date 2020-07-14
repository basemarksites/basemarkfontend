import React, { Component } from 'react'
import { Container, Row, Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

export default class Registration extends Component {
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
            return <Redirect to='/' />
        }
        return (
            <div >
                <Container className="signupform">
                    <h2 style={{ textAlign: 'center' }}>SIGN UP TO BASEMARK</h2>
                    <hr></hr>

                    <Row>
                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                            <Form>
                                <FormGroup>
                                    <Label for="fullName">Full Name</Label>
                                    <Input type="text" name="fullName" id="fullName"
                                        value={this.state.fullName}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input type="text" name="address" id="address"
                                        value={this.state.address}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone Number </Label>
                                    <Input type="telephone" name="phone" id="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="username">Username </Label>
                                    <Input type="text" name="username" id="username"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password" id="password"
                                                value={this.state.password}
                                                onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="cpassword">Confirm Password</Label>
                                            <Input type="password" name="cpassword" id="cpassword"
                                                value={this.state.cpassword}
                                                onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Button color='primary' block type="submit" onClick={this.handleSubmit}>Register</Button>
                                <Row style={{ margin: '15px 0px 0px 0px' }}>
                                    <Col sm={{ size: 'auto', offset: 4 }} >
                                        <FormText>Already a user? <Link to='/login'>Login here!</Link></FormText>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col xs="12" sm="12" md="12">
                            <a class="text-green ml-2">Basemark @2020 </a>

                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p class="h6">&copy All right Reversed.</p>
                            </div>
                        </Col>

                    </Row>
                </Container>


            </div>
        )
    }
}