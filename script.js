document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const errorSpan = document.getElementById('error');

    form.addEventListener('submit', function (e) {
        errorSpan.textContent = ''; // Clear previous errors
        if (!emailInput.value.trim()) {
            errorSpan.textContent = 'Please enter your email or phone.';
            e.preventDefault();
        }
    });
});