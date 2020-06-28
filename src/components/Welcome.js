import React, { Component } from 'react'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'
import { Button } from 'reactstrap'

export default class Welcome extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <Button color="primary" onClick={this.handleLogout}>
                    Logout
            </Button>
            </div>
        )
    }
}

