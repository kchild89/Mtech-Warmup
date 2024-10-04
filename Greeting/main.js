// Display Greeting

// Get the current hour (0-23)
let hours = new Date().getHours(); 

let message;

if (hours < 12) {
    message = 'Good Morning';
} else if (hours < 18) {
    message = 'Good Afternoon';
} else if (hours < 22) {
    message = 'Good Evening';
} else {
    message = 'Good Night';
}

const messageElement = document.querySelector('h1');

messageElement.textContent = message; 
