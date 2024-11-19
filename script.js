let currentIndex = 0;
const works = document.querySelectorAll('.media-gallery img, .media-gallery video');
let debounceTimer;

function openLightbox(index) {
    if (!works[index]) return; // Safety check

    const work = works[index];
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const titleElement = document.getElementById('lightbox-title');
    const descriptionElement = document.getElementById('lightbox-description');

    titleElement.textContent = work.getAttribute('data-title');
    descriptionElement.textContent = work.getAttribute('data-description');

    if (work.tagName.toLowerCase() === 'video') {
        lightboxVideo.src = work.querySelector('source').src;
        lightboxVideo.style.display = 'block';
        lightboxImage.style.display = 'none';
    } else {
        lightboxImage.src = work.src;
        lightboxImage.style.display = 'block';
        lightboxVideo.style.display = 'none';
    }

    lightboxModal.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}


function changeImage(direction) {
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        currentIndex += direction;

        if (currentIndex >= works.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = works.length - 1;
        }

        openLightbox(currentIndex);
    }, 200); // Debouncing the navigation to prevent rapid event firing
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.arrow.left').addEventListener('click', () => changeImage(-1));
    document.querySelector('.arrow.right').addEventListener('click', () => changeImage(1));

    works.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(index);
        });
    });
});


window.onload = function() {
    // Initialize or retrieve the start time from sessionStorage
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now());
    }

    function updateTimer() {
        const startTime = sessionStorage.getItem('startTime');
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').innerText = `You've been lingering here for ${seconds} seconds. It's your time to hustle.`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);
};

// Reset timer when the page is refreshed or closed
window.onbeforeunload = function() {
    sessionStorage.removeItem('startTime');
};


document.addEventListener('DOMContentLoaded', function() {
    var counter = document.getElementById('click-counter');

    // Initialize the click count from sessionStorage or start at 0
    var clicks = parseInt(sessionStorage.getItem('clickCount')) || 0;
    counter.innerText = `You clicked ${clicks} times.`;

    document.addEventListener('click', function() {
        clicks++; // Increment the click count
        sessionStorage.setItem('clickCount', clicks); // Store the updated count in sessionStorage
        counter.innerText = `You clicked ${clicks} times.`;
    });
});


if (window.innerWidth <= 768) {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-300px"; // Hide navbar
        } else {
            navbar.style.top = "0"; // Show navbar
        }
        lastScrollTop = scrollTop;
    });
}