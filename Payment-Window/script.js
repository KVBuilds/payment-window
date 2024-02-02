document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const paymentForm = document.getElementById('paymentForm');
    const proceedToPaymentButton = document.getElementById('proceedToPayment');
    const thankYouBlurb = document.getElementById('thankYouBlurb');
    const returnHomeButton = document.getElementById('returnHome');

    proceedToPaymentButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the registration form
        registrationForm.classList.remove('active');
        registrationForm.style.display = 'none';

        // Show the payment form
        paymentForm.style.display = 'block';
        paymentForm.classList.add('active');
    });

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the payment form
        paymentForm.classList.remove('active');
        paymentForm.style.display = 'none';

        // Show the thank-you blurb
        thankYouBlurb.style.display = 'block';
        thankYouBlurb.classList.add('active');
    });

    returnHomeButton.addEventListener('click', function() {
        // For now, we'll just reload the page to return to the homepage
        // You can replace this with any custom logic you want
        location.reload();
    });
});
