// Show the popup form after 4 seconds
setTimeout(function() {
    document.getElementById('popupForm').style.display = 'flex';
}, 4000);

// Close the popup form when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

// Optionally, close the popup when clicking outside the form
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});
