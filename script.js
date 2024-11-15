let currentIndex = 0; // Initialize index to track current item in the lightbox
const works = document.querySelectorAll('.media-gallery img, .media-gallery video'); // Assuming this selector grabs all your items

function openLightbox(index) {
    const work = works[index];
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const titleElement = document.getElementById('lightbox-title'); // Ensure this element exists
    const descriptionElement = document.getElementById('lightbox-description'); // Ensure this element exists

    // Update the title and description from data attributes
    titleElement.textContent = work.getAttribute('data-title');
    descriptionElement.textContent = work.getAttribute('data-description');

    // Determine if the current work is an image or video
    if (work.tagName.toLowerCase() === 'video') {
        lightboxVideo.src = work.querySelector('source').src;
        lightboxVideo.style.display = 'block';
        lightboxImage.style.display = 'none';
    } else {
        lightboxImage.src = work.src;
        lightboxImage.style.display = 'block';
        lightboxVideo.style.display = 'none';
    }

    lightboxModal.style.display = 'flex'; // Show the lightbox
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= works.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = works.length - 1;
    }
    openLightbox(currentIndex); // Assumes this function is correctly set to update the display
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.querySelector('.arrow.left').addEventListener('click', function() {
        changeImage(-1);
    });
    document.querySelector('.arrow.right').addEventListener('click', function() {
        changeImage(1);
    });

    // Adding click event listeners to each media item
    works.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
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