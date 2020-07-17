import React, { Component } from 'react'
import { Button, Row, Col, Jumbotron, Input, InputGroupAddon, InputGroup, Label, Card, CardTitle, CardText, Container } from 'reactstrap'
import '../Homepage.css'

import menscloth from '../components/assets/fashion.png'
import womencloth from '../components/assets/dress.png'
import babycloth from '../components/assets/baby.png'
import pants from '../components/assets/pants.png'
import skirt from '../components/assets/skirt.png'
import coverphoto from '../components/assets/cover.jpg'
import { Link } from 'react-router-dom';


export default class Homepage extends Component {
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
                                <Input type="text" name="search" id="search" value={this.state.search} onChange={this.handleChange} ></Input>
                                <InputGroupAddon addonType="append">
                                    <Link to={`/searchProducts/${this.state.search}`}><Button color="success" > Find best item</Button></Link>

                                </InputGroupAddon>
                            </InputGroup>
                        </Col>


                    </Row>
                </Jumbotron>

                <Container style={{ backgroundColor: '#fff' }}  >
                    <Row>
                        <Col sm="12" sm={{ size: 6, offset: 5 }} >
                            <h5> What would you like?</h5>
                        </Col>

                    </Row>


                    <Container className="themed-container" fluid="md">
                        <Row>
                            <Col sm="2" xs="4"></Col>
                           
                            <Col xs="6" sm="3">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText className="align-center">Clothes</CardText>
                                    <Button>Clothes</Button>
                                </Card>
                            </Col>


                            <Col xs="6" sm="3">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Shoes</Button>
                                </Card>
                            </Col>

                            <Col sm="3">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Accesories</Button>
                                </Card>
                            </Col>
                           

                        </Row>
                    </Container>

                    <hr></hr>
                </Container>


            </div>
        )
    }
}
