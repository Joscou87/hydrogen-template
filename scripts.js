document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform form validation (example)
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here, you would typically send the form data to your server
    } else {
        alert('Please fill out all fields.');
    }
});
