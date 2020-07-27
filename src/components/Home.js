import React, { Component } from 'react'

import NavAfterLogin from './NavAfterLogin'
import NavigationBar from './NavigationBar'
import { Button } from 'reactstrap'
import PictureWithSearchbar from './PictureWithSearchbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavAfterLogin></NavAfterLogin>
                <NavigationBar></NavigationBar>
                <PictureWithSearchbar></PictureWithSearchbar>
            </div>
        )
    }
}
