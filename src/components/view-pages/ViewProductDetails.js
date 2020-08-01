import React, { Component } from 'react'
import Navigation from '../Navigation'

import axios from 'axios'
import {
    Container, Row, Col, Label, Button, Form, Modal, ModalBody, ModalHeader, ModalFooter
    , FormGroup, Input, FormText, Progress
} from 'reactstrap'

import NavigationBar from '../NavigationBar'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class ViewProductDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productDetails: [],
            product_size:[],
            modal: false,
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }


    handleSubmit = (e) => {
        this.props.toggle();
    }

    componentDidMount() {
        axios.get('http://localhost:3001/products/' + (this.props.match.params.id), this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    productDetails: response.data,
                    product_size: response.data.product_size
                })
            }).catch((err) => console.log(err.response));

        axios.get('http://localhost:3001/users/myProfile', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data,
                    isLoggedIn: true
                })
            })
            .catch((err) => console.log(err.response));
    }

    addToCart = (productId) => {

        axios.post(`http://localhost:3001/cart/`,
            {
                product: productId,
                customer: this.state.user._id,
            }, this.state.config)
            .then((response) => {
                alert("Added to your cart.")
                console.log(response);

            }).catch((err) => console.log(err.response));
    }


    render() {

        const { value, setValue } = this.state;
        

        return (


            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <Container fluid="md" style={{ margin: '10px auto' }}>
                    <Row>
                        <Col xs="4">
                            <img width='350px' height='380px' src={`http://localhost:3001/uploads/${this.state.productDetails.image}`} alt="product_img"></img>
                        </Col>

                        <Col xs="8">
                            <h4>{this.state.productDetails.product_title}</h4>
                            <Label>{this.state.productDetails.description}</Label> <br></br>
                            <Label>Price : Rs. </Label>
                            <Label>{this.state.productDetails.price}</Label> <br></br>
                            <Label>Size :</Label>
                            
                         
                                <Label><Button size="sm" color="primary" style={{ margin: '5px' }} >{this.state.product_size[0]}</Button></Label>
                                <Label><Button size="sm" color="warning" style={{ margin: '5px' }} >{this.state.product_size[1]}</Button></Label>
                                <Label><Button size="sm" color="danger" style={{ margin: '5px' }} >{this.state.product_size[2]}</Button></Label>
                                <br></br>
                               
 
                          

                            <Button color="danger" style={{ margin: '5px' }} onClick={() => this.addToCart(this.state.productDetails._id)}> Add to Cart</Button>
                            <Button color="secondary" className="ml-3" onClick={this.toggle}>Order</Button>{' '}
                            <Modal isOpen={this.state.modal}>
                                <ModalHeader toggle={this.toggle}>Make your order</ModalHeader>
                                <ModalBody>
                                    <div className="mt-3 ">

                                        <Form>
                                            <FormGroup>
                                                <Input name='fullname' id='fullname' placeholder="Fullname" type='text' value={this.state.fullname} hint="Fullname" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type='text' name='address' placeholder=" Delivery Address" id='address' value={this.state.address} hint="Deivery Address" onChange={this.handleChange} />
                                            </FormGroup>

                                            <Button color='primary' style={{ margin: '20px 0px 0px 0px' }} className="btn-block" onClick={this.handleClick}>Order</Button>
                                        </Form>
                                    </div>
                                </ModalBody>

                                <ModalFooter>
                                    <FormText>Stay safe !</FormText>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                    <h3 className="mt-4">Customer Reviews</h3>
                    <hr></hr>


                    <Container>

                        <Row>
                            <Col xs="4" sm="4">
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography component="legend">Based on 5 review</Typography>
                                    <Rating name="read-only" value={5} readOnly />
                                </Box>
                            </Col>

                            <Col xs="8" sm="4">
                                <Box component="fieldset" borderColor="transparent">

                                    <Rating name="read-only" value={5} readOnly />
                                </Box>

                                <Box component="fieldset" borderColor="transparent">

                                    <Rating name="read-only" value={4} readOnly />
                                </Box>

                                <Box component="fieldset" borderColor="transparent">

                                    <Rating name="read-only" value={3} readOnly />
                                </Box>
                                <Box component="fieldset" borderColor="transparent">

                                    <Rating name="read-only" value={2} readOnly />
                                </Box>
                                <Box component="fieldset" borderColor="transparent">

                                    <Rating name="read-only" value={1} readOnly />
                                </Box>


                            </Col>

                            <Col xs="4">
                                <Button color="secondary" size="lg" onClick={this.toggle1}>Give feedback</Button>{' '}
                                <Modal isOpen={this.state.modal1}>
                                    <ModalHeader toggle={this.toggle1}>Write a review</ModalHeader>
                                    <ModalBody>
                                        <div className="mt-3 ">

                                            <Form>

                                                <FormGroup>
                                                    <Input type='text' name='comment' placeholder=" Comment..." id='comment' value={this.state.comment} hint="Comment" onChange={this.handleChange} />
                                                </FormGroup>

                                                <Button color='primary' style={{ margin: '20px 0px 0px 0px' }} className="btn-block" onClick={this.handleClick}>Order</Button>
                                            </Form>
                                        </div>
                                    </ModalBody>

                                </Modal>

                            </Col>
                        </Row>



                    </Container>
                    <hr></hr>

                    <Container></Container>

                </Container>

            </div >

        )
    }
}

