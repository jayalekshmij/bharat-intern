// script.js

// Add event listener to button
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    // Send form data to server or email
    console.log(formData);
});