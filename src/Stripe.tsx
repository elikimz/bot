import React from 'react';

const CheckoutButton = () => {
    const redirectToCheckout = async () => {
        // Hardcoded Stripe checkout URL
        const checkoutUrl = "https://checkout.stripe.com/c/pay/cs_test_a1mzpbsWQEwJRzJa3c1F4Y7mUMMAiaSwPoldQggBqvz5RXWedKSc4fRLIy#fidkdWxOYHwnPyd1blpxYHZxWjA0VWNMXzxBR09hbmEzV2F1M25XaHN8NU12a2xnRE1ccGddZE5RPTxjMnI1RnxycWhqdE5sa0hjb2loclRWNWNTdD0wcWNAREhKfWFfaEg9MWJqN1JxXEFANTV9T1xnU0RMYScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";

        // Redirect the user to the Stripe checkout page
        window.location.href = checkoutUrl;
    };

    return (
        <div>
            <button onClick={redirectToCheckout}>Proceed to Payment</button>
        </div>
    );
};

export default CheckoutButton;
