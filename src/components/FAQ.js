import React, { Component } from 'react'
import {Container} from 'reactstrap'
import Navbar from './NavigationBar'
import Footer from './Footer'


export default class FAQ extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                
            <Container className="FAQ">
                <h1>FAQ</h1>

        <p>
        Q1: Do I need to pay the sales tax?<br></br>
        No, there is no sales tax on our site.
        </p>
        <p>
        Q2: What are the accepted payment methods?<br></br>
        We accept Credit Cards (only Visa), Western Union and Bank Transfer And hand cash.
        </p>
        <p>
        Q3: Do you accept international orders?<br></br>
        Yes, we accept orders from Australia, Belgium, Canada, Denmark, Finland, France, Germany , Greece, Greenland, Hong Kong, Ireland, Japan, Korea, Luxemburg, Malaysia, New Zealand, Norway, Portugal, Spain, Sweden, Switzerland, Taiwan, United Kingdom and the United Stated directly though our website. If your country or area is not in the list, contact us. We can ship your order almost anywhere in the world.
        </p>
        <p>
        Q4: What should I do if I am getting an error when I pay with my credit card?<br></br>
        If you are trying to checkout using credit card as your payment method but receiving an error, please go back and place an order again, your previous orders placed without payment should be cancelled within 24 hours. Please check with your credit card company to verify that your card is in good standing, if your three orders or more did not go through, please contact us for assistance.
        </p>
        <p>
         Q5: What would happen if my order did not go through but my credit card charged?<br></br>
        If you did not receive an order confirmation number within 24-48 hours, your order was not completed. If your credit card is charged for the unsuccessful order, we will return funds to your credit card account. The refund will appear on to your credit card account within 24-48 hours, depending your credit card company’s processing time. All successful orders that receive an order confirmation number will be charged when the item is shipped from our warehouse.
        </p>
        

         
</Container>
<Footer></Footer>
            </div>
        )
    }
}
