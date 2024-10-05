console.log("Script loaded");

// Toggle the mobile menu
let menuIcon = document.getElementById('menu-icon-wrapper');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("clicked!!");
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


// Handle smooth scrolling for section links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon and navbar classes on scroll
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-container, .menu-container, .gallery-box, .reservations-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js functionality
const typed = new Typed('.multiple-text', {
    strings: ['Elegant Dining', 'Timeless Cuisine', 'Exceptional Service'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Read more button toggle
document.getElementById('read-more-btn')?.addEventListener('click', function (event) {
    event.preventDefault();
    let additionalParagraph = document.querySelector('.additional-paragraph');
    if (additionalParagraph) {
        if (additionalParagraph.style.display === 'none' || additionalParagraph.style.display === '') {
            additionalParagraph.style.display = 'block';
            this.innerText = 'Read less';
        } else {
            additionalParagraph.style.display = 'none';
            this.innerText = 'Read more';
        }
    }
});

// Toggle visibility for sections
document.getElementById('reservations-btn')?.addEventListener('click', function (event) {
    toggleVisibility(event, 'reservations-paragraph');
});

function toggleVisibility(event, paragraphId) {
    event.preventDefault();
    let additionalParagraph = document.getElementById(paragraphId);
    let btn = event.target; // Get the button that triggered the event
    if (additionalParagraph) {
        if (additionalParagraph.style.display === 'none' || additionalParagraph.style.display === '') {
            additionalParagraph.style.display = 'block';
            btn.innerText = 'Hide Info';
        } else {
            additionalParagraph.style.display = 'none';
            btn.innerText = 'Book Now';
        }
    }
}

// Smooth scrolling when clicking on nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







