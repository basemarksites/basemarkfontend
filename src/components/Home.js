import React, { Component } from 'react'

import NavAfterLogin from './NavAfterLogin'
import NavigationBar from './NavigationBar'
import { Button } from 'reactstrap'
import PictureWithSearchbar from './PictureWithSearchbar'
import Footer from './Footer'


export default class Home extends Component {
    render() {

         if(localStorage.getItem('token')){
            return (
                <div>
                    <NavAfterLogin></NavAfterLogin>
                    <NavigationBar></NavigationBar>
                    <PictureWithSearchbar></PictureWithSearchbar>
                    <Footer></Footer>
                </div>
            )

         }
        
    }
}
