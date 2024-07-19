import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'


const stripePromise = loadStripe('pk_live_51PdguJFUHOU4BDRyZ36exUeWiV9Y8sLWKZ8KsIFk0TQQtsZnmDG84BBBb2kLlzmF8xlf3sPhcBN6VSrc9SchEGHV00DGJCbasa')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();