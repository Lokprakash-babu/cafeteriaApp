import React from 'react';

import './paymentContainer.css';
import PaymentForm from '../paymentForm/paymentForm';

export default class Payment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          loaded: false
        }
      }
    componentWillMount(){
        this.setState({
            loaded:true
        })
    }

    render() {
        return (
          this.state.loaded &&
            <PaymentForm
              paymentForm={ window.SqPaymentForm }
            />
        );
      }
}