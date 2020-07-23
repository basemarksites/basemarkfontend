import React, { Component } from 'react'
import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'

import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class KidsProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_id: '',
            product_title: '',
            product_category: '',
            product_size: '',
            description: '',
            price: '',
            image: '',
            product: [],
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            isLoggedIn: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/products/fiteredProductWithGender/' + `Kids`, this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ product: data });
                console.log("data fetch");
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
                <div>
                    <Navigation></Navigation>
                    <NavigationBar></NavigationBar>
                    <Container>
                        <h2 style={{ margin: '20px 0px 0px 0px' }}>Kids Products</h2>
                        <hr></hr>
                        <CardColumns>
                            {this.state.product.map((allProducts =>
                                <Card>
                                    <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.image}`} alt="Card_image" />
                                    <CardBody>
                                        <CardTitle className="cardtitle">{allProducts.product_title}</CardTitle>
                                        <CardTitle className="cardtitle">Rs: {allProducts.price}</CardTitle>
                                        <CardTitle className="cardtitle">Stock: ( {allProducts.stock} )</CardTitle>
                                        <hr></hr>

                                        <Link to={`/productDetails/${allProducts._id}`}>
                                            <Button color="primary" > More Details</Button>
                                        </Link>
                                        <Link to={'/kidsProducts'}>
                                            <Button color="danger" style={{ margin: '5px' }} onClick={() => this.addToCart(allProducts._id)}> Add to Cart</Button>
                                        </Link>

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
                <div>
                    <Navigation></Navigation>
                    <NavigationBar></NavigationBar>
                    <Container>
                        <h2 style={{ margin: '20px 0px 0px 0px' }}>Kids Products</h2>
                        <hr></hr>
                        <CardColumns>
                            {this.state.product.map((allProducts =>
                                <Card>
                                    <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.image}`} alt="Card_image" />
                                    <CardBody>
                                        <CardTitle className="cardtitle">{allProducts.product_title}</CardTitle>
                                        <CardTitle className="cardtitle">Rs: {allProducts.price}</CardTitle>
                                        <CardTitle className="cardtitle">Stock: ( {allProducts.stock} )</CardTitle>
                                        <hr></hr>

                                        <Link to={`/productDetails/${allProducts._id}`}>
                                            <Button color="primary" > More Details</Button>
                                        </Link>
                                        <Link to={'/kidsProducts'}>
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
