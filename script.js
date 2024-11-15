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









function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time-display').textContent = timeString;
}

// Initialize the time and set it to update every second
updateTime();
setInterval(updateTime, 1000);


document.querySelector('#contact-info form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    // Implement AJAX request here if needed or handle form data as required
    alert('Thank you for your message!');
});

console.log(document.querySelector('.media-gallery')); // Should log the gallery element 