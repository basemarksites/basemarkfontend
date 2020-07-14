import React, { Component } from 'react'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button, CustomInput } from 'reactstrap'

import Navigation from '../Navigation'
import FileUploadButton from '../FileUploadButton'
import axios from 'axios'
import { FaItalic } from 'react-icons/fa'

export default class UpdateProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {},
            product_size: [],
            selectedFile: null,
            checksize: [],
            small: false,
            medium: false,
            large: false,
            product_gender: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            product: { ...this.state.product, [e.target.name]: e.target.value },

        })
    }



    componentDidMount() {
        axios.get('http://localhost:3001/products/' + (this.props.match.params.id), this.state.config)
            .then((response) => {

                this.setState({
                    product: response.data,
                    checksize: response.data.product_size

                })

                console.log(this.state.checksize)
            }).catch((err) => console.log(err.response));
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

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        axios.post('http://localhost:3001/upload', data, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product: { ...this.state.product, image: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateProduct = (e) => {
        e.preventDefault();

        let checkArray = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                checkArray.push(key);
            }
        }
        console.log(checkArray);
        // {
        //     image: this.state.image,
        //         product_title: this.state.product_title,
        //             product_category: this.state.product_category,
        //                 product_size: checkArray,
        //                     description: this.state.description,
        //                         price: this.state.price
        // },
        //product_size: checkArray,
        axios.put('http://localhost:3001/products/' + (this.props.match.params.id), {
            ...this.state.product, product_size: checkArray
        }, this.state.config)
            .then((response) => {
                console.log(response.data)
            }).catch((err) => console.log(err.response))

        this.props.history.push('/viewproducts')

    }


    render() {

        {
            this.state.checksize.map(d => {
                if (d === "small") {
                    this.state.small = true
                }

                if (d === "medium") {
                    this.state.medium = true
                }

                if (d === "large") {
                    this.state.large = true
                }

            })
        }

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
                                        <option>Clothings</option>
                                        <option>Shoes</option>
                                        <option>Accessories</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="product_gender">For</Label>
                                    <Input onChange={(e) => this.handleChange(e)} type="select" name="product_gender" id="product_gender" value={this.state.product.product_gender}  >
                                        <option >Select Product For</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="product_size">Size</Label> <br></br>

                                    <input style={{ margin: "5px" }}
                                        type="checkbox"
                                        checked={this.state.small}
                                        onChange={this.onChangeSmall}
                                    />Small

                                     <input style={{ margin: "5px" }}
                                        type="checkbox"
                                        checked={this.state.medium}
                                        onChange={this.onChangeMedium}

                                    />
                                        Medium

                                    <input style={{ margin: "5px" }}
                                        type="checkbox"
                                        checked={this.state.large}
                                        onChange={this.onChangeLarge}

                                    />
                                    Large

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
                                    <Label for="stock">Stock</Label>
                                    <Input type="number" name="stock" id="stock" value={this.state.product.stock}
                                        onChange={(e) => this.handleChange(e)} />
                                </FormGroup>

                                <FormGroup>

                                    <Label for="image">Product image</Label> <br></br>
                                    <img className='img-thumbnail'
                                        width='400' src={`http://localhost:3001/uploads/${this.state.product.image}`}
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