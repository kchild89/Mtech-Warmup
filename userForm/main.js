// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Password validation function
function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
}

// Submit button event listener
document.getElementById('submitBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let errorMessages = [];

    // Validate email
    if (!validateEmail(email)) {
        errorMessages.push('User input must be an email.');
    }

    // Validate password
    if (!validatePassword(password)) {
        errorMessages.push('Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
    }

    // Display error messages or show user info
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        // Display user info
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPassword').textContent = '*'.repeat(password.length);
        document.getElementById('userInfo').classList.remove('hidden');
    }
});
