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
            product_gender: '',
            stock: '',
            selectedFile: null,
            small: false,
            medium: false,
            large: false,
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
        axios.post('http://localhost:3001/upload', data)
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

        let checkArray = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                checkArray.push(key);
            }
        }

        axios.post('http://localhost:3001/products', {
            image: this.state.image,
            product_title: this.state.product_title,
            product_gender: this.state.product_gender,
            product_category: this.state.product_category,
            product_size: checkArray,
            description: this.state.description,
            stock: this.state.stock,
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
    onChangeSmall = () => {
        this.setState(initialState => ({
            small: !initialState.small,
        }));
    }

    onChangeMedium = () => {
        this.setState(initialState => ({
            medium: !initialState.medium,
        }));
    }

    onChangeLarge = () => {
        this.setState(initialState => ({
            large: !initialState.large,
        }));
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
                                        <option >Select Product Category</option>
                                        <option>Clothings</option>
                                        <option>Shoes</option>
                                        <option>Accessories</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_gender">Specially For</Label>
                                    <Input type="select" name="product_gender" id="product_gender" value={this.state.product_gender} onChange={this.handleChange} >
                                        <option >Select Product For</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option>

                                    </Input>
                                </FormGroup>

                                <FormGroup style={{ margin: "6px" }}>
                                    <Label for="product_size">Size</Label> <br></br>


                                    <input style={{ margin: "5px" }}
                                        type="checkbox"
                                        checked={this.state.small}
                                        onChange={this.onChangeSmall}
                                    /> Small

                                    <input style={{ margin: "4px" }}
                                        type="checkbox"
                                        checked={this.state.medium}
                                        onChange={this.onChangeMedium}
                                    />Medium
                                  <input style={{ margin: "3px" }}
                                        type="checkbox"
                                        checked={this.state.large}
                                        onChange={this.onChangeLarge}
                                    />Large


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
                                    <Label for="stock">Stock</Label>
                                    <Input type="number" name="stock" id="stock" value={this.state.stock} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>

                                    <Label for="image">Product image</Label>
                                    <FormGroup>
                                        <img className='img-thumbnail productImage'
                                            width='400' src={`http://localhost:3001/uploads/${this.state.image}`}
                                        />
                                        <CustomInput type='file' id='image'
                                            onChange={this.handleFileSelect} />
                                        {this.state.selectedFile ? (<FileUploadButton
                                            uploadFile={this.uploadFile} />) : null}
                                    </FormGroup>
                                </FormGroup>

                                <Button color='primary' block onClick={this.addproduct}>Add</Button>


                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div >
        )
    }
}





