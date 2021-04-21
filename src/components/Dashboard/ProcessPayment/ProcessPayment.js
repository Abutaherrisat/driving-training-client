import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51If7WpFm4tMXi64eALC7qyx6g4m8asipTr8sIpB2TSIY6AXRhX7fTsEbDPqLDQWuUDlTwDG3cZObXhjdcyqBLgIj00fWR3y5Sv');
const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;