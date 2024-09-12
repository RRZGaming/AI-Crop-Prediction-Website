document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Perform the submission logic here (e.g., send the data to a backend or an API)
    alert('Thank you for contacting us!');
});
