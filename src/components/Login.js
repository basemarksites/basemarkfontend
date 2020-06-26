import React from 'react'
import { Container, Row, Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'

export default function Login() {
    return (
        <div>
            <Navigation></Navigation>
            <NavigationBar></NavigationBar>
            <Container>
                <h2 style={{ margin: '20px 0px 0px 0px', textAlign: 'center' }}>LOGIN</h2>
                <hr></hr>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" name="email" id="email" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>

                            <FormGroup check>
                                <Label check className="chkbox">
                                    <Input type="checkbox" id="checkbox" />{' '}
                                    Remember me
                                </Label>
                            </FormGroup>

                            <Button color='danger' style={{ margin: '20px 0px 0px 0px' }} className="btn-block btnLogin">Login</Button>
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
