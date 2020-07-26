import React, { Component } from 'react'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button, CustomInput, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NewItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItems: '',
            product_id: '',
            product_title: '',
            product_category: '',
            product_size: '',
            description: '',
            price: '',
            image: '',
            product: [],
            items: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:3001/products', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ product: data });
                console.log(response.data);
            }).catch(error => console.log(error.response));

        axios.get('http://localhost:3001/newItems', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ items: data });
                console.log(response.data);
            }).catch(error => console.log(error.response));

    }

    addItems = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/newItems', { product: this.state.newItems }, this.config)
            .then((response) => {
                alert("New Items added to list.")
                console.log(response.data);
                window.location.reload(false);
                this.setState({
                    newItems: ''
                });
            }).catch((err) => console.log(err))
    }

    removeItems = (itemId) => {
        axios.delete(`http://localhost:3001/newItems/${itemId}`, this.state.config)
            .then((response) => {
                alert("Item removed.")
                const filteredItemslist = this.state.items.filter((items) => {
                    return items._id !== itemId
                })
                this.setState({
                    items: filteredItemslist
                })
            }).catch((err) => console.log(err.response));
    }


    render() {
        return (
            <div>
                <Container>
                    <h2>Add Newly Arrived Items...</h2>
                    <FormGroup>
                        <Label for="newItems">Product</Label>
                        <Input type="select" name="newItems" id="newItems" value={this.state.newItems}
                            onChange={this.handleChange}>
                            <option>Select new item from here</option>
                            {
                                this.state.product.map((product) => {
                                    return <option key={product._id} value={product._id}>{product.product_title}</option>
                                })
                            }
                        </Input>
                    </FormGroup>
                    <Button color='primary' onClick={this.addItems}>Add product</Button>
                </Container>

                <div className='table'>
                    <table className='table' style={{ width: '80%', margin: '25px auto' }}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map((items) => {
                                    return (
                                        <tr key={items._id}>
                                            <th>
                                                <img className='img-thumbnail '
                                                    width='200px' src={`http://localhost:3001/uploads/${items.product.image}`}
                                                    alt="profile" />
                                            </th>
                                            <td>
                                                {items.product.product_title}
                                            </td>
                                            <td>
                                                {items.product.price}
                                            </td>
                                            <td>
                                                <Button color='danger' block onClick={() => this.removeItems(items._id)}>Remove</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
