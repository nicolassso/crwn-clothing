import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishabkeKey = 'pk_test_51JZYcUFJknwhSPBDCq1gl39L0mNas3MU5QoIoDlEvcLkuI2OMyeuGii1VicGGWCdFStfwiVgX1lKXss4pjFIIKHI0003YEXSVl';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN cClothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.zvg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishabkeKey}
        />
    )
}

export default StripeCheckoutButton;