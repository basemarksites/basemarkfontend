import React, { Component } from 'react'
import axios from 'axios'
import {
    Container, Row, Col, Label, Button, Form, Modal, ModalBody, ModalHeader, ModalFooter
    , FormGroup, Input, FormText, Progress
} from 'reactstrap'

export default class ViewFeedbacks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_feedbacks: [],
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        //Feedbacks
        axios.get('http://localhost:3001/feedbacks/' + (this.props.match.params.id), this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product_feedbacks: response.data
                })
            }).catch((err) => console.log(err.response));
    }

    render() {
        return (
            <div>
                {
                    this.state.product_feedbacks.map((product_feedback) =>
                        <p key={product_feedback._id}>{product_feedback.comment}</p>
                    )
                }

            </div>
        )
    }
}
