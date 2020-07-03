import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button, CustomInput, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation'
import FileUploadButton from '../FileUploadButton'



export default class AddProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: '',
            product_title: '',
            product_category: '',
            product_size: '',
            description: '',
            price: '',
            product: {},
            selectedFile: null,

        }
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        axios.post('http://localhost:3002/uploads', data, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    image: response.data.filename
                })
            }).catch((err) => console.log(err.response))
    }

    addproduct = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3002/products', {
            image: this.state.image,
            product_title: this.state.product_title,
            product_category: this.state.product_category,
            product_size: this.state.product_size,
            description: this.state.description,
            price: this.state.price
        }, this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    image: '',
                    product_title: '',
                    product_category: '',
                    product_size: '',
                    description: '',
                    price: ''
                });
            }).catch((err) => console.log(err))

        this.props.history.push('/viewproducts');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div>
                <Navigation></Navigation>

                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>Add Product </h2>

                    <Link to={`/viewproducts`}>
                        <Button color="primary" style={{ margin: '-30px 60px 0px 60px', float: 'right' }}> View products</Button>
                    </Link>
                    <hr></hr>



                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form>
                                <FormGroup>
                                    <Label for="product_title">Product name</Label>
                                    <Input type="text" name="product_title" id="product_title" value={this.state.product_title} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_category">Category</Label>
                                    <Input type="select" name="product_category" id="product_category" value={this.state.product_category} onChange={this.handleChange} >

                                        <option>Select Product Category</option>
                                        <option selected >Women</option>
                                        <option>Men</option>
                                        <option>Kids</option>

                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_size">Size</Label>
                                    <Input type="text" name="product_size" id="product_size" value={this.state.product_size} onChange={this.handleChange} />

                                    <div>
                                        <CustomInput multiple={true} type="checkbox" value={this.state.product_size} onChange={this.handleChange} id="small" label="S" inline />
                                        <CustomInput multiple={true} type="checkbox" value={this.state.product_size} onChange={this.handleChange} id="medium" label="M" inline />
                                        <CustomInput multiple={true} type="checkbox" value={this.state.product_size} onChange={this.handleChange} id="large" label="L" inline />
                                        <CustomInput type="checkbox" id="extra large" label="XL" inline />
                                        <CustomInput type="checkbox" id=" double extra large" label="2XL" inline />
                                        <CustomInput type="checkbox" id=" triple extra large" label="3XL" inline />
                                        <CustomInput type="checkbox" id=" double extra large" label="4XL" inline />
                                    </div>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="number" name="price" id="price" value={this.state.price} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>

                                    <Label for="image">Product image</Label>
                                    <CustomInput type='file' id='image'
                                        onChange={this.handleFileSelect} />
                                    {this.state.selectedFile ? (<FileUploadButton
                                        uploadFile={this.uploadFile} />) : null}

                                </FormGroup>

                                <Button color='primary' block onClick={this.addproduct}>Add</Button>


                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}
