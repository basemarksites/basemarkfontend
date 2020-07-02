import React, { Component } from 'react'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button, CustomInput } from 'reactstrap'

import Navigation from '../Navigation'
import FileUploadButton from '../FileUploadButton'
import axios from 'axios'

export default class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {},
            selectedFile: null
        }
    }

    handleChange(e) {
        this.setState({
            product: { ...this.state.product, [e.target.name]: e.target.value }
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3002/products/' + (this.props.match.params.id), this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product: response.data
                })

            }).catch((err) => console.log(err.response));
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
                    product: { ...this.state.product, image: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/products/' + (this.props.match.params.id), this.state.product, this.state.config)
            .then((response) => {
                console.log(response.data)
            }).catch((err) => console.log(err.response))

        this.props.history.push('/viewproducts')

    }


    render() {
        return (
            <div>
                <Navigation></Navigation>

                <Container>
                    <h2 style={{ margin: '20px 0px 0px 0px' }}>Update Product </h2>
                    <hr></hr>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form>
                                <FormGroup>
                                    <Label for="product_title">Product name</Label>
                                    <Input type="text" name="product_title" id="product_title" value={this.state.product.product_title}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_category">Category</Label>
                                    <Input onChange={(e) => this.handleChange(e)} type="select" name="product_category" id="product_category" value={this.state.product.product_category}  >
                                        <option >Select Product Category</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                        <option>Kids</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_size">Size</Label>
                                    <Input type="text" name="product_size" id="product_size" value={this.state.product.product_size}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>



                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="description" id="description" value={this.state.product.description}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="number" name="price" id="price" value={this.state.product.price}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>

                                <FormGroup>

                                    <Label for="image">Product image</Label> <br></br>
                                    <img className='img-thumbnail'
                                        width='400' src={`http://localhost:3002/uploads/${this.state.product.image}`}
                                        alt="itemImage" />
                                    <CustomInput type='file' id='image'
                                        onChange={this.handleFileSelect} />
                                    {this.state.selectedFile ? (<FileUploadButton
                                        uploadFile={this.uploadFile} />) : null}

                                </FormGroup>

                                <Button color='primary' block onClick={this.updateProduct}>Save</Button>


                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}
