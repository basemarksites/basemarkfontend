import React, { Component } from 'react'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'

import {Redirect} from 'react-router-dom'
import PictureWithSearchbar from './PictureWithSearchbar'

export default class Welcome extends Component {
  
    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to='/home' />
        }
        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <PictureWithSearchbar></PictureWithSearchbar>
               
            </div>
        )
    }
}