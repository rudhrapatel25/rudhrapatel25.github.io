document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(el => observer.observe(el));

// Hide nav bar on scroll down
let lastScrollTop = 0;
const topNav = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling DOWN
        topNav.style.top = '-100px';
    } else {
        // Scrolling UP
        topNav.style.top = '25px';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

