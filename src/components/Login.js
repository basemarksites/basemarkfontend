import React, { Component } from 'react'
import { Container, Row, Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            role:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/users/login', this.state)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
              
               
                
                
                this.setState({
                    role: response.data.role
                   
                   
                })
                
                console.log(this.state.role)
               
            }).catch((err) => console.log(err.response))

           
                
                
           
           
       
    }
    render() {

        
        if (this.state.role === 'admin'){
            return<Redirect to='/addproduct'/>
          } else  if( this.state.role === 'customer'){
            return<Redirect to='/allproducts'/>

          }

        if (localStorage.getItem('token')) {
            return (<Redirect to='/' />)
        }

        return (
            <div >
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <Container className="signinform">
                    <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
                    <hr></hr>

                    <Row>
                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                            <Form>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                </FormGroup>

                                <Button color='success' style={{ margin: '20px 0px 0px 0px' }} className="btn-block btnLogin"
                                    onClick={this.handleSubmit}>Login</Button>
                                <Row style={{ margin: '15px 0px 0px 0px' }}>
                                    <Col sm={{ size: 'auto' }} >
                                        <Link to='/recoverpassword'>Forget Password? </Link>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 3 }} >
                                        <FormText>New user? <Link to='/register'>Create an account </Link></FormText>
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


