import { useNavigate, useLocation } from 'react-router-dom';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        console.log("test ")
        e.preventDefault();

        if (!stripe || !elements) {
            console.log("stripe or elements doesn't exist")
            return;
        }

        // Do something with the element.
        const cardElement = elements.getElement(CardElement);
        console.log('card', cardElement);
        crossOriginIsolated.log('stripe', stripe)
    }

    /* @ComeBackTo wrap CardElement */
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Pay</button>
        </form>
    )
}
/*
const withRouter = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        return <Component {...props} navigate={navigate} location={location} />;
    };
};
*/

export default PaymentForm;
