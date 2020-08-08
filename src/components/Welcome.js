import React, { Component } from 'react'
import Navigation from './Navigation'
import NavigationBar from './NavigationBar'

import {Redirect} from 'react-router-dom'
import PictureWithSearchbar from './PictureWithSearchbar'
import { Link } from '@material-ui/core'
import HotSales from './view-pages/HotSales'
import NewItems from './view-pages/NewItems'
import Footer from './Footer'

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
        if (localStorage.getItem('token')) {
            return <Redirect to='/home' />
        }
        return (
            <div>
                <Navigation></Navigation>
                <NavigationBar></NavigationBar>
                <PictureWithSearchbar></PictureWithSearchbar>
<<<<<<< HEAD
<<<<<<< HEAD
               
=======
                <HotSales></HotSales>
                <NewItems></NewItems>
                <Footer></Footer>
>>>>>>> uttam-ui
=======

               

                <HotSales></HotSales>
                <NewItems></NewItems>
                <Footer></Footer>

>>>>>>> ashish-branch
            </div>
        )
    }
}