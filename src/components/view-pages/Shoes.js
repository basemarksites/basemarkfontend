import React, { Component } from 'react'
import Navigation from '../Navigation'

import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Mens extends Component {
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
        axios.get('http://localhost:3001/products/fiteredProductWithCategory/' + `Shoes`, this.config)
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

                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>Our Shoes</h2>
                    <hr></hr>
                    <CardColumns>
                        {this.state.product.map((allProducts =>
                            <Card>
                                <CardImg className="cardimg" top width="70%" height="280px" src={`http://localhost:3001/uploads/${allProducts.image}`} alt="Card_image" />
                                <CardBody>
                                    <CardTitle className="cardtitle">{allProducts.product_title}</CardTitle>
                                    <hr></hr>

                                    <Link to={`/viewProducts/${allProducts._id}`}>
                                        <Button color="primary" > More Details</Button>
                                    </Link>
                                    <Link to={`/addToCart/${allProducts._id}`}>
                                        <Button color="success" style={{ margin: '5px' }} > Add to Cart</Button>
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
