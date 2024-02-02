<h1 align="center">
  Simple Payment Window Example
</h1>



## How To Use

It's a primary example of the payment processing window we tend to see for many ecommerce related websites. 
Overall steps guide you from intaking basic name and email information, to credit card level data. Of course, you can also play around with this and add Stripe or relevant APIs that makes the data request easier and safe. 

```


document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const paymentForm = document.getElementById('paymentForm');
    const proceedToPaymentButton = document.getElementById('proceedToPayment');
    const thankYouBlurb = document.getElementById('thankYouBlurb');
    const returnHomeButton = document.getElementById('returnHome');

