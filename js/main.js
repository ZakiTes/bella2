console.log("Script loaded");

// Toggle the mobile menu
let menuIcon = document.getElementById('menu-icon-wrapper');
let navbar = document.querySelector('.navbar');

const barsIcon = `
    <svg class="fa fa-bars" id="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none" />
    </svg>
`;

const xmarkIcon = `
    <svg class="fa fa-xmark" id="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" fill="none" />
    </svg>
`;

menuIcon.onclick = () => {
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        menuIcon.innerHTML = xmarkIcon; // Replace with xmark icon
    } else {
        menuIcon.innerHTML = barsIcon; // Replace with bars icon
    }
};

// Smooth scrolling for section links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon and navbar classes on scroll (only when the navbar is active)
    if (navbar.classList.contains('active')) {
        menuIcon.innerHTML = barsIcon;
        navbar.classList.remove('active');
    }
});

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
document.getElementById('read-more-btn')?.addEventListener('click', function() {
    const additionalParagraph = document.querySelector('.additional-paragraph');
    const additionalParagraph1 = document.querySelector('.additional-paragraph1');
    
    if (additionalParagraph.style.display === 'none' && additionalParagraph1.style.display === 'none') {
        additionalParagraph.style.display = 'block';
        additionalParagraph1.style.display = 'block';
        this.textContent = 'Read less';
    } else {
        additionalParagraph.style.display = 'none';
        additionalParagraph1.style.display = 'none';
        this.textContent = 'Read more';
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

// Gallery Modal functionality
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".gallery-box img");
    const modal = document.getElementById("galleryModal");
    const modalImage = document.getElementById("modalImage");

    // Open the modal and display the clicked image
    function openModal(index) {
        modal.style.display = "block";
        modalImage.src = images[index].src;
        currentImageIndex = index;
    }

    // Close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Change slides in the modal
    function changeSlide(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        modalImage.src = images[currentImageIndex].src;
    }

    // Attach event listeners for each image
    images.forEach((img, index) => {
        img.onclick = () => openModal(index);
    });

    // Slide change buttons
    document.querySelector(".prev").onclick = () => changeSlide(-1);
    document.querySelector(".next").onclick = () => changeSlide(1);

    // Close modal when clicking outside of the modal content (image)
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when scrolling the page
    window.addEventListener('scroll', function () {
        if (modal.style.display === "block") {
            closeModal();
        }
    });
});














