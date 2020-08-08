import React, { Component } from 'react'
import axios from 'axios'

export default class ViewOrder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             orders: [],
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }

    }
    componentDidMount(){
        axios.get('http://localhost:3001/orders/', this.state.config)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                orders : response.data
            })
            
            
       
    }).catch((err) => console.log(err.response));
    }
    
    render() {
        return (
            <div className="Table">
            <table className="table" style={{ width: '80%', margin: '25px auto' }} >
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">oid</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quanity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
               
                        <tbody>
                            {this.state.orders.map((orders) => {
                    return (

                        <tr>
                        <th scope="row">1</th>
                    <td>{orders.customer.fullName}</td>
                    <td>{orders.product.product_title}</td>
                    <td>{orders.qty}</td>
                    <td>Rs.{orders.totalPrice}</td>
                    <td>{orders.destination}</td>
                    <td>{orders.order_date}</td>
                    <td>{orders.totalprice}</td>
                    <td>{orders.status}</td>
                        
                      </tr>
                    )
                })}

                </tbody>
            </table>
            </div>
        )
}

}

