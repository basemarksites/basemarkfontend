import React, { Component } from 'react'
import { Button, Row, Col, Jumbotron, Input, InputGroupAddon, InputGroup, Label, Card, CardTitle, CardText, Container, CardImg, CardImgOverlay } from 'reactstrap'
import '../Homepage.css'

import menscloth from '../components/assets/fashion.png'
import womencloth from '../components/assets/dress.png'
import babycloth from '../components/assets/baby.png'
import pants from '../components/assets/pants.png'
import skirt from '../components/assets/skirt.png'
import coverphoto from '../components/assets/cover.jpg'
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa'


export default class PictureWithSearchbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Jumbotron className="imagebutton">
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label className="heading">A unique store at your door</Label>
                            <InputGroup>
                                <Input type="text" name="search" id="search" placeholder='Search your products...' value={this.state.search} onChange={this.handleChange} ></Input>
                                <InputGroupAddon addonType="append">
                                    <Button color="success" href="" >
                                        <Link to={`/searchProducts/${this.state.search}`} style={{ textDecoration: 'none', color: '#fff' }}><FaSearch></FaSearch>   Find Product</Link>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>

                    </Row>
                </Jumbotron>

                <Container style={{ backgroundColor: '#fff' }}  >
                    <Row>
                        <Col sm="12" sm={{ size: 6, offset: 5 }} >
                            <h5> What would you like see?</h5>
                        </Col>
                    </Row>
                    <Container className="themed-container mt-5" fluid="md" >
                        <Row>
                            <Col sm="2" xs="4"></Col>

                            <Col xs="6" sm="3">
                                <Link to="/clothes" style={{ textDecoration: 'none' }}>

                                    <CardImg width="100%" src={coverphoto} alt="Card image cap" />
                                    <CardTitle></CardTitle>
                                    <Button color="warning" block>Clothes</Button>

                                </Link>
                            </Col>


                            <Col xs="6" sm="3">
                                <Link to="/shoes" style={{ textDecoration: 'none' }}>

                                    <CardImg width="100%" src={coverphoto} alt="Card image cap" />
                                    <CardTitle></CardTitle>
                                    <Button color="success" block>Shoes</Button>

                                </Link>
                            </Col>

                            <Col sm="3">
                                <Link to="/accessories" style={{ textDecoration: 'none' }}>

                                    <CardImg width="100%" src={coverphoto} alt="Card image cap" />
                                    <CardTitle></CardTitle>
                                    <Button color="danger" block>Accessories</Button>

                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <hr></hr>
                </Container>


            </div>
        )
    }
}
