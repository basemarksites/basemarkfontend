import React from 'react'
import { Container, Row, Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'

export default function Registration() {
    return (
        <div>
            <Container>
                <h2 style={{ margin: '20px 0px 0px 0px', textAlign:'center' }}>NEW TO BASEMARK</h2>
                <hr></hr>

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="first_name">First name</Label>
                                        <Input type="text" name="first_name" id="first_name" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="last_name">Last name</Label>
                                        <Input type="text" name="last_name" id="last_name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone_number">Phone number </Label>
                                <Input type="telephone" name="phone_number" id="phone_number" />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="confirm_password">Confirm Password</Label>
                                        <Input type="text" name="confirm_password" id="confirm_password" />
                                    </FormGroup>
                                </Col>
                            </Row>


                            <Button color='primary' block >Register</Button>
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



