// hide
// document.addEventListener('DOMContentLoaded', () => {
//     const bar = document.getElementById('menu-btn');
//     const close = document.getElementById('close-btn');
//     const nav = document.getElementById('navbar');

//     if (bar) {
//         bar.addEventListener('click', () => {
//             nav.classList.add('active');
//         });
//     }
//     if (close) {
//         close.addEventListener('click', () => {
//             nav.classList.remove('active');
//         });
//     }
// });
// hide



// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.header__nav-link--mobile');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Services tab functionality
// const serviceTabs = document.querySelectorAll('.services__tab');
// const serviceDetails = document.querySelectorAll('.service-detail');

// serviceTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active class from all tabs
//         serviceTabs.forEach(t => t.classList.remove('active'));
        
//         // Add active class to clicked tab
//         tab.classList.add('active');
        
//         // Hide all service details
//         serviceDetails.forEach(detail => {
//             detail.style.display = 'none';
//         });
        
//         // Show selected service detail
//         const serviceId = tab.getAttribute('data-service');
//         document.getElementById(`${serviceId}-detail`).style.display = 'block';
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // 2. Services Tab Interactivity
    const serviceTabs = document.querySelectorAll(".service-tab");
    const serviceContents = document.querySelectorAll(".service-content");

    serviceTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        // Remove active class from all tabs
        serviceTabs.forEach((t) => t.classList.remove("active"));
        // Hide all contents
        serviceContents.forEach((content) => {
        content.classList.remove("active");
        });

        // Activate clicked tab
        this.classList.add("active");
        const targetId = this.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
        targetContent.classList.add("active");
        }
    });
    });
});
// Client logo carousel (simplified autoplay)
let currentClientIndex = 0;
const clientLogos = document.querySelectorAll('.client-logo');

function rotateClients() {
    // Reset all
    clientLogos.forEach(logo => logo.style.opacity = '0.7');
    
    // Highlight current
    clientLogos[currentClientIndex].style.opacity = '1';
    clientLogos[currentClientIndex].style.transform = 'scale(1.05)';
    
    // Move to next
    currentClientIndex = (currentClientIndex + 1) % clientLogos.length;
}

// Initial call and set interval
rotateClients();
setInterval(rotateClients, 3000);

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
