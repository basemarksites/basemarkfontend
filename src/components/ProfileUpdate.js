import React, { Component } from 'react'
import { Container, Row, Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

export default class  ProfileUpdate extends Component {
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
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/users/myProfile', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();

        axios.put('http://localhost:3001/users/myProfile',this.state.user, this.state.config)
        .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
    this.props.history.push('/');
    }
    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
       
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
                                        value={this.state.user.fullName}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input type="text" name="address" id="address"
                                        value={this.state.user.address}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email"
                                        value={this.state.user.email}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone Number </Label>
                                    <Input type="telephone" name="phone" id="phone"
                                        value={this.state.user.phone}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="username">Username </Label>
                                    <Input type="text" name="username" id="username"
                                        value={this.state.user.username}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                                


                                <Button color='primary' block type="Update Profile" onClick={this.handleUpdate}>Update Profile</Button>
                                
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
}