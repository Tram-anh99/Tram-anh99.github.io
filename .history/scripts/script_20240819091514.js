// Add your JavaScript here if needed
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#45a049';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '';
        });
    });
});
