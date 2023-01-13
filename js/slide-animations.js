function startAnimationOnScroll() {
    var slideSection = document.querySelector(".contenedor.slide");
    var observer = new IntersectionObserver(onIntersection);
    observer.observe(slideSection);

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                slideSection.classList.add("animate");
            } else {
                slideSection.classList.remove("animate");
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', startAnimationOnScroll);