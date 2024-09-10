// Toggle Menu Function
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

// Close menu when a navbar link is clicked
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        if (navbar.classList.contains('open')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}