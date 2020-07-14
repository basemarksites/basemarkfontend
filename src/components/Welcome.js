import React, { Component } from 'react'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'
import { Button } from 'reactstrap'
import Home from './Homepage'


export default class Welcome extends Component {
    constructor(props) {
        super(props)

        
    
        
    }
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
                <Home></Home>
                <Button color="primary" onClick={this.handleLogout}>
                    Logout
            </Button>
            </div>
        )
    }
}