import React, { Component } from 'react'
import { Button, Row, Col, Jumbotron, Input, InputGroupAddon, InputGroup, Label } from 'reactstrap'
import '../Homepage.css'

import menscloth from '../components/assets/fashion.png'
import womencloth from '../components/assets/dress.png'
import babycloth from '../components/assets/baby.png'
import pants from '../components/assets/pants.png'
import skirt from '../components/assets/skirt.png'
import coverphoto from '../components/assets/cover.jpg'



export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="imagebutton">
                    <Row>
                    <Col sm="16" md={{ size: 8, offset: 2 }}>
                        <Label className="heading">A unique store at your door</Label>
                      
                        <InputGroup id="searchbar">
                            <Input />
                            <InputGroupAddon addonType="append">
                                <Button className="search" color="success"> Find best item</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>

                    </Row>
                </Jumbotron>

                <Jumbotron style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col sm="12" sm={{ size: 6, offset: 5 }} >
                        <h5> What would you like?</h5>
                    </Col>

                    <Col md="12" md={{ size: 7, offset: 3 }}>
                        <img src={menscloth} id="imgmens" data-toggle="tooltip" title="Clothing" alt="category" />
                        <img src={womencloth} id="imgwomen" data-toggle="tooltip" title="Clothing" alt="category" />
                        <img src={babycloth} id="imgbaby" data-toggle="tooltip" title="Clothing" alt="category" />
                        <img src={pants} id="imgpants" data-toggle="tooltip" title="Clothing" alt="category" />
                        <img src={skirt} id="imgskirt" data-toggle="tooltip" title="Clothing" alt="category" />
                       
                       
                    </Col>
                </Row>
                <hr></hr>
            </Jumbotron>

                
            </div>
        )
    }
}
