import React, { Component } from 'react'
import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'

import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button, Col, Jumbotron } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class HotSales extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotItems: [],
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            isLoggedIn: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/hotSales', this.state.config)
            .then((response) => {
                const data = response.data;
                this.setState({ hotItems: data });
                console.log(response.data);
            }).catch(error => console.log(error.response));

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
        if (localStorage.getItem('token')) {
            return (
                <div style={{ marginTop: "30px " }}>
                    <hr></hr>
                    <Col sm="12" sm={{ size: 6, offset: 5 }} >
                        <h5>Our Best Selling Items</h5>
                    </Col>
                    <Container>
                        <CardColumns>
                            {this.state.hotItems.map((allProducts =>
                                <Card>
                                    <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.product.image}`} alt="Card_image" />
                                    <CardBody>
                                        <CardTitle className="cardtitle">{allProducts.product.product_title}</CardTitle>
                                        <CardTitle className="cardtitle">Rs: {allProducts.product.price}</CardTitle>
                                        <CardTitle className="cardtitle">Stock: ( {allProducts.product.stock} )</CardTitle>
                                        <hr></hr>

                                        <Link to={`/productDetails/${allProducts.product._id}`}>
                                            <Button color="primary" > More Details</Button>
                                        </Link>
                                        <Button color="danger" style={{ margin: '5px' }} onClick={() => this.addToCart(allProducts.product._id)}> Add to Cart</Button>
                                    </CardBody>
                                </Card>
                            ))}
                        </CardColumns>
                    </Container>

                </div>
            )
        }
        else {
            return (
                <div style={{ marginTop: "30px " }}>
                    <hr></hr>
                    <Col sm="12" sm={{ size: 6, offset: 5 }} >
                        <h5>Our Best Selling Items</h5>
                    </Col>
                    <Container>
                        <CardColumns>
                            {this.state.hotItems.map((allProducts =>
                                <Card key={allProducts._id}>
                                    <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.product.image}`} alt="Card_image" />
                                    <CardBody>
                                        <CardTitle className="cardtitle">{allProducts.product.product_title}</CardTitle>
                                        <CardTitle className="cardtitle">Rs: {allProducts.product.price}</CardTitle>
                                        <CardTitle className="cardtitle">Stock: ( {allProducts.product.stock} )</CardTitle>
                                        <hr></hr>

                                        <Link to={`/productDetails/${allProducts.product._id}`}>
                                            <Button color="primary" > More Details</Button>
                                        </Link>
                                        <Link to={'/mensProducts'}>
                                            <Button color="danger" style={{ margin: '5px' }} title="Please login first" disabled > Add to Cart</Button>
                                        </Link>

                                    </CardBody>
                                </Card>
                            ))}
                        </CardColumns>
                    </Container>

                </div>
            )
        }

    }
}
