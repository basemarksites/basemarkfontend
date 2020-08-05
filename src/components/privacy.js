import React, { Component } from 'react'
import {Container} from 'reactstrap'
import Navbar from './NavigationBar'
import Footer from './Footer'

export default class privacy extends Component {
    render() {
        return (
            <div>
            <Navbar></Navbar>
            <Container className="FAQ">
                <h1>Privacy Policy</h1>
                <p>Basemark is an ecommerce market where people can find many varieties of clothing under reasonable price.  
                As part of our commitment to providing exceptional products and services, we collect personal information during our interactions with you. The following privacy policy outlines what information we collect, how it is handled, and the steps we take to ensure that it remains protected.</p>
                <h4>Information we collect and how we use it </h4>

                    <p>Individuals using Our Online Store and Our Online Store (our "Sites") may choose to provide their personal information at various times. Providing your personal information is always voluntary. The following explains where you may provide such information and how it is used. Please note that in any instance where we use your information for email marketing purposes, you will only receive such communications if you elect to do so (see "Email Communications and Your Choices").</p>
 

                <h4> "My Account"</h4>
                    <p>When you register on any of our Sites, we ask for your name, mailing address (including city, state, and zip code), phone number, and email address in order to set up your account. We also allow you the option of providing additional information, including, but not limited to, your date of birth and gender. The more we know about you, the more we are able to personalize your site experience and tailor our specific products and promotions to meet your interests.</p>

                    <p>The information we collect through the "My Account" feature is used to help improve our Sites, customize your site experience, deliver updates or notices about our organization, and to send you direct and/or email marketing communications about our products and promotions.</p>

 

                <h4>Purchases</h4>
                    <p>When you make a purchase through one of our Sites, we ask for information such as your name, email address, billing address, telephone number, payment card information, and shipping address. Such information is used to process, confirm, and ship your order. We may also use this information to send you direct and/or email marketing communications about our products and promotions.</p>

                    <p>When shipping an order to a third party, you will be required to provide their name, shipping address, telephone number, and email address. Such information is used solely to complete the order and to notify the recipient of their shipment. We will never use the personal information of a third party recipient for marketing purposes.</p>


                <h4>"Contact Us"</h4>
                <p>If you choose to communicate using the "Contact Us" feature, we will ask for your name, email address, and telephone number. We use this information to respond to your inquiry and to assist you in navigating our Sites.</p>
 

                <h4>Surveys and Contests</h4>
                    <p>We may, on occasion, request information from you using surveys, sweepstakes, or other like contests. Your participation is never required. If you choose to participate, we may ask for your name, mailing address, email address, and/or telephone number. We use this information to administer the relevant survey or contest and for award notification purposes, as applicable. We may also use the information to provide you with direct and/or email marketing communications about our products and promotions.</p>

                    <p>  Product Ratings and Reviews Users of our Sites may provide ratings and reviews about our products. To submit a review, you must first create and/or access your shoes account. Because we are able to associate you with the review you are submitting, we may use information in your review to personalize your site experience and tailor our product offerings to meet your interests.</p>
                    <p>  Visitors When you choose to browse our Sites as a visitor, we gather only non-personally identifiable information from you, as outlined in the "Cookies and Other Web Applications" section of this policy.</p>
 
 

                <h4>Cookies and other web applications</h4>

                    <p>Our Online Store uses cookies and other technologies for remarketing purposes and to better understand the needs and wants of our customers. Cookies are small data text files which are automatically transferred from our Sites to your computer’s hard drive for identification purposes. Cookies allow us to recognize your web browser every time you visit, so that we can personalize your experience and identify the areas of our Sites which are most relevant to you.</p>

                    <p>We also uses cookies to collect aggregate data about our customer base. Through the use of cookies, we are able to track which parts of our Sites are most popular, where our visitors are going, and how much time they spend there. Such information helps us to provide you with improved services and a better overall site experience.</p>

                    <p> If you would prefer not to accept cookies from our Sites or any others, you can modify your browser preferences to refuse them. In order to do so, please refer to your browser’s "help" section.</p>
               </Container>
            <Footer></Footer>
            </div>

        )
    }
}
