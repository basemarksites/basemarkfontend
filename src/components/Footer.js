
import React, { Component } from 'react'
import basemark from './assets/basemarklogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* Footer Area Start */}
                <footer className="footer-area section-padding-80-0">
                    <div className="container">

                        <div className="row justify-content-between">

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="single-footer-widget mb-80">


                                    {/* logo */}

                                    <img src={basemark} className="footer-logo" alt="basemark_icon" style={{ margin: '0px 0px 0px 100px' }} height='40px' />

                                    <p className="mb-30" >We would love to serve you and let you enjoy your experience at basemark.</p>

                                    <div className="copywrite-text">
                                        <p>
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script>

                  
                                            
                                          
                <div className="footer-menu"  />

                                           <h4 className="mb-30" >Footer Menu</h4>
                                           <a href="/FAQ" >FAQ</a><br></br>

                                           <a href="/privacy" >Privacy Policy</a>


                                           <div className="copywrite-text">
                                               <div><link></link></div>
                                               <p>
                                               Copyright &copy;<script>document.write(new Date().getFullYear());</script>

                                                All rights reserved |  <i class="fa fa-heart-o" aria-hidden="true"></i> by Agile Team
                                               </p>
                                    </div>
                                    </p>

                                </div>
                            </div>


                            {/* Single Footer Widget  */}
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="single-footer-widget mb-80">

                                    <h4 className="widget-title">Opening times</h4>


                                    <div className="open-time">
                                        <p>Sunday: Friday: 10.00 - 23.00</p>
                                        <p>Saturday: 10.00 - 19.00</p>
                                    </div>


                                    <div className="social-info">
                                    <a href="#" className="google-plus">
                                            <FontAwesomeIcon icon="user" />
                                        </a>
                                        <a href="#" className="instagram">
                                            <FontAwesomeIcon icon="user" />
                                        </a>
                                        <a href="#" className="google-plus">
                                            <FontAwesomeIcon icon="user" />
                                        </a>
                                        <a href="#" className="instagram">
                                            <FontAwesomeIcon icon="user" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-xl-3">
                                <div className="single-footer-widget mb-80">


                                    <h4 className="widget-title">Contact Us</h4>


                                    <div className="contact-address">
                                        <p>Tel: (+977) 984000000000 </p>
                                        <p>E-mail: Hello@gmail.com</p>
                                        <p>Address: Gongabu , Kathmandu </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>

                </footer>
            </div>
        )
    }
}