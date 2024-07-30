document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const result = document.getElementById('result');

    let isValid = true;

    // Reset previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

    // Validate Full Name
    if (name.value.trim() === '') {
        showError(name, 'Full Name is required');
        isValid = false;
    }

    // Validate Email
    if (email.value.trim() === '') {
        showError(email, 'Email Address is required');
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Enter a valid Email Address');
        isValid = false;
    }

    // Validate Phone Number
    if (phone.value.trim() === '') {
        showError(phone, 'Phone Number is required');
        isValid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        showError(message, 'Your Message is required');
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        result.textContent = 'Form is valid. Submitting...';
        document.getElementById('form').submit();

        // Reset form fields
        document.getElementById('form').reset();

        // Clear the result message after a short delay
        setTimeout(() => {
            result.textContent = '';
        }, 3000);
    }
});

function showError(input, message) {
    input.classList.add('invalid');
    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    input.parentNode.appendChild(error);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
