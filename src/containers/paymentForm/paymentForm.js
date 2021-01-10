import React, { Component } from "react";

import './paymentForm.css';

export default class PaymentForm extends Component {
    visa={
        color:"navy"
    }
    amex={
        color:"blue"
    }
    masterCard={
        color:"red"
    }
    discover={
        color:"orange"
    }
    handleClick(e){
        document.getElementById(1).style.display="none";
        
        document.getElementById(2).style.display="none";
        
        document.getElementById(3).style.display="none";
        console.log(e.target.dataset.attr)
        document.getElementById(e.target.dataset.attr).style.display='block';
    }
  render(){
        return(
            <div className="paymentSection">
                <p className="moneyText">Pay {sessionStorage.getItem('money')} pounds using: </p>
                <div className="paymentName">
                    <div className="option" onClick={this.handleClick}  data-attr={1}>
                        <div className="images">
                            <img data-attr={1} className="images" src="https://img.icons8.com/plasticine/100/000000/google-logo.png" alt="google pay"/> 
                        </div>
                        Pay with Google pay
                    </div>
                    <div className="option" onClick={this.handleClick}  data-attr={2}>
                        <div className="images">
                            <img data-attr={2} src="https://img.icons8.com/fluent/48/000000/paypal.png" alt="paypal"/>
                        </div>
                        Pay with paypal
                    </div>
                    <div className="option" onClick={this.handleClick}  data-attr={3}>
                        <div className="images">
                            <img data-attr={3} src="https://img.icons8.com/fluent/48/000000/credit-card-interest.png" alt="credit card"/>
                        </div>
                        Pay with Credit card
                    </div>
                </div>

                <div className="paymentCard">
                    <div className="googlePay" id={1}>
                        <button>Continue with google pay</button>
                    </div>
                    <div className="paypal" id={2}>
                        <button>Continue with paypal</button>
                    </div>
                    <div className="creditCard" id={3}>
                        <div className="row">
                                <div className="col-75">
                                <div className="container">
                                    <form >
                            
                                    <div className="row">

                            
                                        <div className="col-50">
                                        <h3>Payment</h3>

                                        <label htmlFor="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                                        <label htmlFor="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                            
                                        <div className="row">
                                            <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                                            </div>
                                            <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352"/>
                                            </div>
                                        </div>
                                        </div>
                            
                                    </div>
                                    <input type="submit" value="Continue to checkout" className="btn"/>
                                    </form>
                                </div>
                                </div>
                                <div className="col-25"></div>
                        </div> 
                    </div>
                </div>
            </div>

        );
    }
}
