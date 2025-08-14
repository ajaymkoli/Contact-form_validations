document.addEventListener('DOMContentLoaded', () => {
    // Get form and input elements
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const mobileError = document.getElementById('mobileError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Function to validate the name input
    const validateName = () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            nameInput.classList.add('error-border');
            return false;
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
            nameInput.classList.remove('error-border');
            return true;
        }
    };

    // Function to validate the email input using regex
    const validateEmail = () => {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
            emailInput.classList.add('error-border');
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            emailInput.classList.add('error-border');
            return false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
            emailInput.classList.remove('error-border');
            return true;
        }
    };

    // Function to validate the mobile number input
    const validateMobile = () => {
        // Simple regex for a 10-digit mobile number
        const mobileRegex = /^[0-9]{10}$/;
        if (mobileInput.value.trim() === '') {
            mobileError.textContent = 'Mobile number is required.';
            mobileError.style.display = 'block';
            mobileInput.classList.add('error-border');
            return false;
        } else if (!mobileRegex.test(mobileInput.value.trim())) {
            mobileError.textContent = 'Please enter a valid 10-digit mobile number.';
            mobileError.style.display = 'block';
            mobileInput.classList.add('error-border');
            return false;
        } else {
            mobileError.textContent = '';
            mobileError.style.display = 'none';
            mobileInput.classList.remove('error-border');
            return true;
        }
    };

    // Function to validate the message input
    const validateMessage = () => {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageError.style.display = 'block';
            messageInput.classList.add('error-border');
            return false;
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
            messageInput.classList.remove('error-border');
            return true;
        }
    };

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Run all validation functions
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMobileValid = validateMobile();
        const isMessageValid = validateMessage();

        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isMobileValid && isMessageValid) {
            successMessage.textContent = 'Form submitted successfully! (No data was sent)';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form fields
        } else {
            successMessage.style.display = 'none';
        }
    });

    // Optional: Real-time validation as the user types (good for UX)
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    mobileInput.addEventListener('blur', validateMobile);
    messageInput.addEventListener('blur', validateMessage);
});