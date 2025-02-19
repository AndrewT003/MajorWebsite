document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Зупиняє спостереження після появи
            }
        });
    }, { threshold: 0.2 });

    hiddenElements.forEach(el => observer.observe(el));
});
