import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard_container">

                <h6 className="mb-3 mt-3 text-muted text-center"> Admin Dashboard </h6>

                <Container className="dashboard_btn_container">
                    <Row>
                        <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-danger text-dark mt-3 mb-3 pt-3 pb-3 controls nounderline"
                            to="/viewproducts" style={{ width: '22rem' }}>
                            <h4 className="text-center"><img src={require('../assets/AddProducts.jpg')} alt="sportlogo" /></h4>
                            <h4 className="text-center">Products</h4>
                            <p className="text-center"><small>View Products Info</small></p>
                        </Link>
                        <span className="col-lg-1 col-md-4"></span>
                        <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-danger text-dark mt-3 mb-3 pt-3 pb-3 controls"
                            to="/newItems" style={{ width: '22rem' }}>
                            <h4 className="text-center"><img src={require('../assets/NewArrived.png')} alt="sportlogo" /></h4>
                            <h4 className="text-center">New Items</h4>
                            <p className="text-center"><small>New Items Info</small></p>
                        </Link>
                        <span className="col-lg-1 col-md-4"></span>
                        <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-danger text-dark mt-3 mb-3 pt-3 pb-3 controls"
                            to="/hotSaleItems" style={{ width: '22rem' }}>
                            <h4 className="text-center"><img src={require('../assets/Sale.png')} alt="sportlogo" /></h4>
                            <h4 className="text-center">Hot Sale Items</h4>
                            <p className="text-center"><small>Hot Sale Items Info</small></p>
                        </Link>
                        <span className="col-lg-1 col-md-4"></span>
                        <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-danger text-dark mt-3 mb-3 pt-3 pb-3 controls"
                            to="/adminOrders" style={{ width: '22rem' }}>
                            <h4 className="text-center"><img src={require('../assets/Order.jpg')} alt="sportlogo" /></h4>
                            <h4 className="text-center">Orders</h4>
                            <p className="text-center"><small>Orders Info</small></p>
                        </Link>
                    </Row>
                </Container>
            </div>
        )
    }
}
