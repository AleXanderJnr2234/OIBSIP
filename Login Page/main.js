document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Define a simple username and password for demonstration purposes.
    const correctUsername = 'user123';
    const correctPassword = 'pass123';

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get user input
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Check if the entered credentials match the correct ones
        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
        } else {
            message.style.color = 'red';
            message.textContent = 'Incorrect username or password. Please try again.';
        }
    });
});
