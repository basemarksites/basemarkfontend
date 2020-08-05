import React, { Component } from 'react'
import { Container, CardColumns, Card, CardImg, CardBody, CardTitle, Button, Badge } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class AdminOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            user: {},
            status: '',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/orders', this.config)
            .then((response) => {
                const data = response.data;
                this.setState({ orders: data });
                console.log("data fetch");
            }).catch(error => console.log(error.response));

        axios.get("http://localhost:3001/users/myProfile", this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    user: response.data,
                    isLoggedIn: true,
                });
            })
            .catch((err) => console.log(err.response));

    }

    updateOrder = (orderId) => {
        axios.put(`http://localhost:3001/orders/${orderId}`, {
            ...this.state.order, status: "Delivered"
        }, this.state.config)
            .then((response) => {
                console.log(response.data)
                window.location.reload(false);
            }).catch((err) => console.log(err.response))

    };
    render() {
        return (
            <div>
                <h2>
                    All Orders
                </h2>
                <table className="table" style={{ width: "90%", margin: "25px auto" }}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Location</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order) => {
                            return (
                                <tr key={order._id}>
                                    <th>
                                        <img
                                            width="150"
                                            height="150"
                                            src={`http://localhost:3001/uploads/${order.product.image}`}
                                            alt="profile"
                                        />
                                    </th>
                                    <td>{order.customer.fullName}</td>
                                    <td>{order.product.product_title}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.destination}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.order_date}</td>
                                    <td>
                                        {order.status === 'Delivered' ? (<Button color='success' disabled>{order.status}</Button>) : <Button color='danger' disabled>{order.status}</Button>}
                                    </td>
                                    <td> <Button
                                        color="primary"
                                        block onClick={() => this.updateOrder(order._id)}> Update
                                    </Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
