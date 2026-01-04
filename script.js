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
