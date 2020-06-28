import React, { Component } from 'react'
import Navigation from '../Navigation'

import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
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
        axios.get('http://localhost:3002/products', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ product: data });
                console.log("data fetch");
            }).catch(error => console.log(error.response));

    }

    deleteProduct = (product_id) => {
        axios.delete(`http://localhost:3002/products/${product_id}`, this.state.config)
            .then(response => {
                const filteredProduct = this.state.product.filter((i) => {
                    return i._id !== product_id
                })
                this.setState({
                    product: filteredProduct
                })
            }).catch((err) => console.log.response)
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>

                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>All Products</h2>
                    <Link to={`/addproduct`}>
                        <Button color="primary" style={{ margin: '-30px 60px 0px 60px', float: 'right' }}> All more products</Button>
                    </Link>
                    <hr></hr>

                    <CardColumns>
                        {this.state.product.map((allProducts =>
                            <Card>
                                <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3002/uploads/${allProducts.image}`} alt="Card_image" />
                                <CardBody>
                                    <CardTitle className="cardtitle">{allProducts.product_title}</CardTitle>
                                    <hr></hr>

                                    <Link to={`/updateproduct/${allProducts._id}`}>
                                        <Button color="primary" style={{ margin: '0px 60px 0px 60px' }}> Update</Button>
                                    </Link>
                                    <Button color="danger" >Delete <FaTrashAlt className="icons" onClick={() => this.deleteProduct(allProducts._id)}></FaTrashAlt> </Button>
                                </CardBody>
                            </Card>
                        ))}
                    </CardColumns>

                </Container>

            </div>
        )
    }
}
