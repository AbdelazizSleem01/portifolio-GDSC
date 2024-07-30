document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navItems = document.querySelector('.nav-items');
    const contactBar = document.querySelector('.contact-bar');
    const nav = document.querySelector('.nav');


    navToggle.addEventListener('click', () => {
        navItems.classList.toggle('active');
        navToggle.classList.toggle('active');
        contactBar.classList.toggle('active');
        nav.classList.toggle('active');

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressValues = document.querySelectorAll('.progress-value');

    const options = {
        threshold: 0.5 // Adjust threshold as needed
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const value = progressBar.getAttribute('value');
                const span = progressBar.nextElementSibling;
                let counter = 0;

                // Reset progress bar value to 0
                progressBar.value = 0;
                span.textContent = `0%`;

                const interval = setInterval(() => {
                    if (counter >= value) {
                        clearInterval(interval);
                    } else {
                        counter++;
                        progressBar.value = counter;
                        span.textContent = `${counter}%`;
                    }
                }, 10);
            }
        });
    }, options);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter h1');

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'), 10);
        let count = 0;
        const increment = Math.ceil(target / 100);

        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            element.textContent = count + '+';
        }, 20);
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                // Resetting the counter
                counter.textContent = '0+';
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        const target = parseInt(counter.textContent, 10);
        counter.setAttribute('data-target', target);
        counter.textContent = '0+';
        observer.observe(counter);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.projects-container');
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Moves the container left or right
        container.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.carousel-button.right').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    document.querySelector('.carousel-button.left').addEventListener('click', function () {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});


var slideIndex = 0;
showSlides2(slideIndex);

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides2, 3000)
}



