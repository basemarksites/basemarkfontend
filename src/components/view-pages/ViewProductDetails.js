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
import ListOfFeedbacks from './ViewFeedbacks'

export default class ViewProductDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: '',
            ratings: '',
            productDetails: [],
            product_feedbacks: [],
            modal: false,
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
        this.toggle = this.toggle.bind(this);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                    productDetails: response.data
                })
            }).catch((err) => console.log(err.response));

        //Feedbacks
        axios.get('http://localhost:3001/feedbacks/' + (this.props.match.params.id), this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product_feedbacks: response.data
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

    postFeedback = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/feedbacks', {
            comment: this.state.comment,
            ratings: this.state.ratings,
            customer: this.state.user._id,
            product: this.state.productDetails._id
        }, this.state.config)
            .then((response) => {
                console.log(response.data);
                alert("Thank you for your feedback.")
                window.location.reload(false);
                this.setState({
                    comment: '',
                    ratings: '',
                });
            }).catch((err) => console.log(err))
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
                            <Button size="sm" color="primary">Size</Button>
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

                    <Container>
                        <FormGroup>
                            <Label for="comment">Your feedback</Label>
                            <Input type="comment" name="comment" id="comment" placeholder="Give us your feedbacks....."
                                value={this.state.comment} onChange={this.handleChange} />
                        </FormGroup>
                        <Button color="success" onClick={this.postFeedback}>Submit</Button>
                    </Container>
                    <hr></hr>
                    <Container style={{ backgroundColor: '#DCDCDC', padding: '10px' }}>
                        <h3>Feedbacks</h3>

                        {
                            this.state.product_feedbacks.map((feedback) =>
                                <p key={feedback._id} for="comment">{feedback.comment}  Posted By: {feedback.customer.fullName}</p>

                            )
                        }
                    </Container>
                </Container>
                {/* <ListOfFeedbacks></ListOfFeedbacks> */}



            </div >

        )
    }
}

