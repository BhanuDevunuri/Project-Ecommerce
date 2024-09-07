// payment.js

document.addEventListener('DOMContentLoaded', () => {
    function simulatePayment() {
        return new Promise((resolve) => {
            setTimeout(() => resolve('Payment Successful!'), 1000);
        });
    }

    async function displayPaymentStatus() {
        const statusElement = document.getElementById('paymentStatus');
        if (statusElement) {
            try {
                const message = await simulatePayment();
                statusElement.textContent = message;
                statusElement.style.color = 'green'; // Success message color
            } catch (error) {
                statusElement.textContent = 'Payment Failed. Please try again.';
                statusElement.style.color = 'red'; // Error message color
            }
        }
    }

    const payButton = document.getElementById('payButton');
    if (payButton) {
        payButton.addEventListener('click', async () => {
            await displayPaymentStatus();
        });
    }
});
