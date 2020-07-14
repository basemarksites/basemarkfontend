import React, { Component } from 'react'

import Navigation from '../Navigation'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button } from 'reactstrap'
import axios from 'axios'

export default class ProductCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/productCategories', {
            category: this.state.category
        }, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    category: ''
                });
            }).catch((err) => console.log(err))
        this.props.history.push('/productcategory');
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>

                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>Add Product Category</h2>
                    <hr></hr>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form>
                                <FormGroup>
                                    <Label for="category">Product Category</Label>
                                    <Input type="text" name="category" id="category" value={this.state.category} onChange={this.handleChange} />
                                </FormGroup>

                                <Button color='primary' block onClick={this.handleSubmit}>Add</Button>

                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}
