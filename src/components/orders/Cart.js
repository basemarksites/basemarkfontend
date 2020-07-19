import React, { Component } from 'react'
import Axios from 'axios'
import { FaTrashAlt } from 'react-icons/fa';
import { Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'

export default class cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            item: [],
            user: {},
            qty: '',
            total: '',
            //fullName: '',
            product_title: '',
            isOrder: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            isLoggedIn: false
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:3001/cart', this.state.config)
            .then((response) => {
                const data = response.data;
                this.setState({ cart: data });
                console.log(response.data);
            }).catch(error => console.log(error.response));

        // Axios.get('http://localhost:3001/cart/' + (this.props.match.params.id), this.state.config)
        //     .then((response) => {
        //         const data = response.data;
        //         this.setState({ itemOrder: data });
        //         console.log("data fetch");
        //     }).catch(error => console.log(error.response));

        Axios.get('http://localhost:3001/users/myProfile', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data,
                    isLoggedIn: true
                })
            })
            .catch((err) => console.log(err.response));

    }
    toggleOrder = (e) => {
        this.setState({
            isOrder: !this.state.isOrder
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    removeCartItem = (cartId) => {
        Axios.delete(`http://localhost:3001/cart/${cartId}`, this.state.config)
            .then((response) => {
                alert("Item removed from your cart.")
                const filteredCartlist = this.state.cart.filter((cart) => {
                    return cart._id !== cartId
                })
                this.setState({
                    cart: filteredCartlist
                })
            }).catch((err) => console.log(err.response));
    }
    prepareOrder = (cartId) => {

        Axios.get(`http://localhost:3001/cart/${cartId}`
            , this.state.config)
            // .then((response) => {
            //     console.log(response.data)
            //     this.setState({
            //         item: response.data,
            //         isOrder: !this.state.isOrder
            //     });
            // })
            .then((response) => {
                const data = response.data;
                this.setState({ item: data, isOrder: !this.state.isOrder });
                console.log(response.data);
            }).catch((err) => console.log(err.response));
    }

    render() {

        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <h2>My Cart</h2>
                <div className="Table">
                    <table className="table" style={{ width: '80%', margin: '25px auto' }} >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Remove</th>
                                <th scope="col">Order Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cart.map(cart => {
                                    return (
                                        <tr key={cart._id}>
                                            <th>
                                                <img className='img-thumbnail '
                                                    width='200px' src={`http://localhost:3001/uploads/${cart.product.image}`}
                                                    alt="profile" />
                                            </th>
                                            <td>{cart.product.product_title}</td>
                                            <td>Rs. {cart.product.price}</td>
                                            <td>
                                                <input type="number" style={{ width: 75 }}
                                                    name="qty" id="qty" value={this.state.qty} onChange={this.handleChange}>
                                                </input>
                                            </td>
                                            <td><button type="button" class="btn btn-danger" onClick={() => this.removeCartItem(cart._id)}> <FaTrashAlt className="icons" ></FaTrashAlt> Remove</button></td>
                                            <td>
                                                <Button color='warning' block onClick={() => this.prepareOrder(cart._id)}>Order Now</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                    <Modal isOpen={this.state.isOrder} toogle={this.toggleOrder}>

                        <ModalHeader toggle={this.toggleOrder}>
                            Place Order
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Input name='product' type='text'
                                    value={this.state.item.product} disabled></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input name='customer' type='text'
                                    value={this.state.item.customer} disabled></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input name='qty' type='number'
                                    placeholder="Select quantity..."></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input name='totalPrice' type='number'
                                    disabled placeholder="Your total price is..."></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input name='destination' type='text'
                                    placeholder="Delivery Location..."></Input>
                            </FormGroup>


                        </ModalBody>

                        <ModalFooter>
                            <Button color='primary' >
                                Confirm Order</Button>
                        </ModalFooter>

                    </Modal>
                </div>

                <div className="orderForm" >
                    <h3>Total: Rs. </h3>
                    <Button color='dark' block >Order Now</Button>
                </div>
            </div>


        )
    }
}


