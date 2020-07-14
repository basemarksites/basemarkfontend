import React, { Component } from 'react'
import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'

import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button, Label } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ViewProducts extends Component {
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
            product: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/products', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ product: data });
                console.log("data fetch");
            }).catch(error => console.log(error.response));

    }


    render() {
        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>All Products</h2>
                    <hr></hr>
                    <Label style={{ margin: '0px 10px' }}> For: </Label>
                    <Link to={`/mensProducts`} >
                        <Button color="success" style={{ margin: '5px' }}> Mens products</Button>
                    </Link>
                    <Link to={`/womensProducts`}>
                        <Button color="success" style={{ margin: '5px' }}> Womens products</Button>
                    </Link>
                    <Link to={`/kidsProducts`} >
                        <Button color="success" style={{ margin: '5px' }}> Kids products</Button>
                    </Link>


                    <hr></hr>
                    <Label style={{ margin: '0px 10px' }}> Categories: </Label>
                    <Link to={`/clothes`} >
                        <Button color="warning" style={{ margin: '5px' }}> Clothes</Button>
                    </Link>
                    <Link to={`/shoes`} >
                        <Button color="warning" style={{ margin: '5px' }}> Shoes</Button>
                    </Link>
                    <Link to={`/accessories`} >
                        <Button color="warning" style={{ margin: '5px' }}> Accessories</Button>
                    </Link>
                    <hr></hr>

                    <CardColumns>
                        {this.state.product.map((allProducts =>
                            <Card>
                                <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.image}`} alt="Card_image" />
                                <CardBody>
                                    <CardTitle className="cardtitle">{allProducts.product_title}</CardTitle>
                                    <CardTitle className="cardtitle">Rs: {allProducts.price}</CardTitle>
                                    <hr></hr>
                                    <Link to={`/productDetails/${allProducts._id}`}>
                                        <Button color="primary" > More Details</Button>
                                    </Link>
                                    <Link to={`/addToCart/${allProducts._id}`}>
                                        <Button color="danger" style={{ margin: '5px' }} > Add to Cart</Button>
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