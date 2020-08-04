import React, { Component } from "react";
import Axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {
    Label,
    Input,
    FormGroup,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import NavigationBar from "../NavigationBar";

export default class cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            cartItems: [],
            item: [],
            quantity: 1,
            user: {},
            qty: "",
            product: {},
            res: {},
            totalPrice: 0,
            phone: "",
            destination: "",
            order_date: new Date().toLocaleString(),
            deliver_date: "",
            //fullName: '',
            //product_title: '',
            isOrder: false,
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            },
            isLoggedIn: false,
        };
    }

    Increment = (id) => {
        //console.log("The product is ", this.state.cartItems)
        // Check if the item is there or not
        // const existingCart = this.state.cartItems.find(cart => cart._id === id)
        this.setState({
            quantity: this.state.quantity + 1,
            //totalPrice: this.state.quantity + 1
        });

    };
    Decrement = (id) => {
        // console.log("The product is ")

        this.setState({
            quantity: this.state.quantity - 1,
            //totalPrice: this.state.quantity  1
        });
    };

    componentDidMount() {
        Axios.get("http://localhost:3001/cart", this.state.config)
            .then((response) => {
                const data = response.data;
                data.map(cart => {
                    this.state.cartItems.push(cart.product)
                })
                this.setState({ cart: data });
                console.log(response.data);
            })
            .catch((error) => console.log(error.response));

        // Axios.get('http://localhost:3001/cart/' + (this.props.match.params.id), this.state.config)
        //     .then((response) => {
        //         const data = response.data;
        //         this.setState({ itemOrder: data });
        //         console.log("data fetch");
        //     }).catch(error => console.log(error.response));

        Axios.get("http://localhost:3001/users/myProfile", this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    user: response.data,
                    isLoggedIn: true,
                });
            })
            .catch((err) => console.log(err.response));
    }
    toggleOrder = (e) => {
        this.setState({
            isOrder: !this.state.isOrder,
        });
    };

    handleChange = (e) => {
        console.log("Inuput :", this.state)
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // handleChange = (e) => {
    //     this.setState({
    //         product: { ...this.state.product, [e.target.name]: e.target.value },

    //     })
    // }

    removeCartItem = (cartId) => {
        Axios.delete(`http://localhost:3001/cart/${cartId}`, this.state.config)
            .then((response) => {
                alert("Item removed from your cart.");
                const filteredCartlist = this.state.cart.filter((cart) => {
                    return cart._id !== cartId;
                });
                this.setState({
                    cart: filteredCartlist,
                });
            })
            .catch((err) => console.log(err.response));
    };

    // prepareOrder = (cartId) => {

    //     Axios.get(`http://localhost:3001/cart/${cartId}`
    //         , this.state.config)

    //         .then((response) => {
    //             const { item, product: { _id, product_title, price } } = response.data;
    //             this.setState({ item: { item, product_title, _id, price }, isOrder: !this.state.isOrder });
    //             //this.setState({ res: response, isOrder: !this.state.isOrder });
    //             console.log(response);
    //         }).catch((err) => console.log(err.response));
    // }
    prepareOrder = (productId) => {
        Axios.get(`http://localhost:3001/products/${productId}`, this.state.config)

            .then((response) => {
                const data = response.data;
                this.setState({ item: data, isOrder: !this.state.isOrder });
                console.log(response.data);
                console.log(response);
            })
            .catch((err) => console.log(err.response));
    };

    addOrder = (itemId) => {
        console.log("State", this.state)
        Axios.post(`http://localhost:3001/orders/myOrders`, {
            product: itemId,
            customer: this.state.user._id,
            qty: this.state.quantity,
            totalPrice: this.state.quantity * this.state.item.price,
            phone: this.state.phone,
            destination: this.state.destination,
            order_date: this.state.order_date
        }, this.state.config)
            .then((response) => {
                const data = response.data;
                alert("order success")
                this.setState({ qty: 1 });
            })
            .catch((err) => console.log(err.response));
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <h2>My Cart</h2>
                <div className="Table">
                    <table
                        className="table"
                        style={{ width: "80%", margin: "25px auto" }}
                    >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                {/* <th scope="col">Qty</th> */}
                                <th scope="col">Remove</th>
                                <th scope="col">Order Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cart.map((cart) => {

                                return (
                                    <tr key={cart._id}>
                                        <th>
                                            <img
                                                className="img-thumbnail "
                                                width="200px"
                                                src={`http://localhost:3001/uploads/${cart.product.image}`}
                                                alt="profile"
                                            />
                                        </th>
                                        <td>{cart.product.product_title}</td>
                                        <td>Rs. {cart.product.price}</td>
                                        <td>{cart.product.stock}</td>
                                        {/* <td>Rs. {cart.product.price * this.state.quantity}</td> */}
                                        {/* <td>
                                            <GoArrowLeft onClick={() => this.Decrement(cart.product._id)} />
                                            <span>{this.state.quantity}</span>
                                            <GoArrowRight onClick={() => this.Increment(cart.product._id)} />
                                        </td> */}
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                onClick={() => this.removeCartItem(cart._id)}
                                            >
                                                <FaTrashAlt className="icons"></FaTrashAlt> Remove
                                            </button>
                                        </td>
                                        <td>
                                            <Button
                                                color="warning"
                                                block
                                                onClick={() => this.prepareOrder(cart.product._id)}
                                            >
                                                Order Now
                      </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Modal isOpen={this.state.isOrder} toogle={this.toggleOrder}>
                        <ModalHeader toggle={this.toggleOrder}>Place Order</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <label>Product</label>
                                <Input
                                    name="product"
                                    type="text"
                                    value={this.state.item.product_title}
                                    disabled
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Product Id</label>
                                <Input
                                    name="product"
                                    type="text"
                                    value={this.state.item._id}
                                    disabled
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Customer's Name</label>
                                <Input
                                    name="product"
                                    type="text"
                                    value={this.state.user.fullName}
                                    disabled
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Quantity</label>
                                <td>
                                    <GoArrowLeft onClick={this.Decrement} />
                                    <span>{this.state.quantity}</span>
                                    <GoArrowRight onClick={this.Increment} />
                                </td>
                            </FormGroup>
                            <FormGroup>
                                <label>Total Price</label>
                                <Input
                                    name="totalPrice"
                                    type="text"
                                    //value={this.state.totalPrice}
                                    value={this.state.item.price * this.state.quantity}
                                    onChange={() => this.handleChange}
                                    disabled
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Delivery Location</label>
                                <Input
                                    name="destination"
                                    type="text"
                                    value={this.state.destination}
                                    placeholder="Delivery Location..."
                                    onChange={this.handleChange}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Contact Number</label>
                                <Input
                                    name="phone"
                                    type="phone"
                                    value={this.state.phone}
                                    placeholder="Contact Number..."
                                    onChange={this.handleChange}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label>Order Date</label>
                                <Input
                                    name="order_date"
                                    type="text"
                                    value={this.state.order_date}
                                    placeholder="Today.."
                                    disabled
                                ></Input>
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={() => this.addOrder(this.state.item._id)}>Confirm Order</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div className="orderForm">
                    <h3>Total: Rs.{this.state.cart.price} </h3>
                    <Button color="dark" block>
                        Order Now
          </Button>
                </div>
            </div>
        );
    }
}
