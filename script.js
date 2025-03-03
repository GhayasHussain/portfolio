function validateSignInForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Username (cannot be empty)
    if (username.trim() === "") {
        showError('username', 'Username cannot be empty');
        isValid = false;
    }

    // Validate Password (cannot be empty, check for min 6 characters, and must contain special char & number)
    if (password.trim() === "") {
        showError('password', 'Password cannot be empty');
        isValid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
        showError('password', 'Password must be at least 6 characters and contain a letter, number, and special character');
        isValid = false;
    }

    return isValid;
}

function validateSignUpForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Full Name
    if (fullName.trim() === "") {
        showError('fullName', 'Full Name cannot be empty');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Password
    if (password.trim() === "") {
        showError('signUpPassword', 'Password cannot be empty');
        isValid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
        showError('signUpPassword', 'Password must be at least 6 characters and contain a letter, number, and special character');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    // Validate Age (Must be between 18 and 100)
    if (age < 18 || age > 100) {
        showError('age', 'Age must be between 18 and 100');
        isValid = false;
    }

    // Validate Phone Number (Must be a 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showError('phone', 'Phone number must be 10 digits');
        isValid = false;
    }

    // Validate Gender
    if (gender === "") {
        showError('gender', 'Please select your gender');
        isValid = false;
    }

    // Validate Terms and Conditions
    if (!terms) {
        showError('terms', 'You must accept the terms and conditions');
        isValid = false;
    }

    return isValid;
}

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    inputElement.parentNode.appendChild(errorElement);
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}

// Focus and blur functions
function focusInput(input) {
    input.style.borderColor = '#4CAF50';
    input.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.6)';
}

function blurInput(input) {
    input.style.borderColor = '#ccc';
    input.style.boxShadow = 'none';
}
