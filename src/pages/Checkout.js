import React from 'react';
import PaymentForm from '../stripe/PaymentForm';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const Checkout = () => {

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Checkout Page</h1>
      <PaymentForm />
      
    </div>
  );
}

export default Checkout;
