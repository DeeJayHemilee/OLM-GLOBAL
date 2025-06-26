// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // 1. Header Scroll Detection
    const header = document.getElementById("header");
    const heroSection = document.getElementById("home");
  
    function handleHeaderBackground() {
      const scrollY = window.scrollY;
      // If user scrolls more than 50px, make header solid
      if (scrollY > 50) {
        header.classList.remove("header-transparent");
        header.classList.add("header-solid");
        // Change nav/link/icon colors to red/blue when background is white
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.style.color = "#1d3557"; // blue text
        });
        document.querySelectorAll(".header-icons .icon").forEach((icon) => {
          icon.style.color = "#1d3557";
        });
      } else {
        // Revert to transparent style
        header.classList.remove("header-solid");
        header.classList.add("header-transparent");
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.style.color = "#ffffff"; // white text
        });
        document.querySelectorAll(".header-icons .icon").forEach((icon) => {
          icon.style.color = "#ffffff";
        });
      }
    }
  
    window.addEventListener("scroll", handleHeaderBackground);
  
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
  
    // 3. Mobile Menu Toggle
    const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileCloseBtn = document.getElementById("mobile-menu-close");
    const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    const mobileLinks = document.querySelectorAll(".mobile-link");
  
    mobileToggleBtn.addEventListener("click", function () {
      mobileNavDrawer.classList.add("open");
    });
  
    mobileCloseBtn.addEventListener("click", function () {
      mobileNavDrawer.classList.remove("open");
    });
  
    // Close drawer when a mobile link is clicked
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileNavDrawer.classList.remove("open");
      });
    });
  
    // (Optional) Close drawer if click outside drawer on mobile
    document.addEventListener("click", function (e) {
      if (
        !mobileNavDrawer.contains(e.target) &&
        !mobileToggleBtn.contains(e.target)
      ) {
        mobileNavDrawer.classList.remove("open");
      }
    });
  
    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top:
              targetSection.getBoundingClientRect().top +
              window.pageYOffset -
              header.offsetHeight,
            behavior: "smooth",
          });
        }
      });
    });

    document.querySelectorAll('.service-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' });
      });
    });

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    // Add form handler
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
        this.reset();
    });

    const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // remove to animate only once
      }
    });
  }, {
    threshold: 0.2 // 20% visible before triggering
  });

  reveals.forEach(reveal => observer.observe(reveal));


  
    
  });


  


    