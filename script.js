let currentIndex = 0; // Initialize index to track current item in the lightbox

// Function to open the lightbox with the current item
function openLightbox(index) {
    const work = works[index];
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const mediaContainer = document.querySelector('.media-container'); // Get the container

    // Set image or video source and apply zoom
    if (work.isVideo) {
        lightboxVideo.src = work.src;
        lightboxVideo.style.display = 'block';
        lightboxImage.style.display = 'none';
    } else {
        lightboxImage.src = work.src;
        lightboxImage.style.display = 'block';
        lightboxVideo.style.display = 'none';
    }

    // Add 'active' class to apply zoom effect
    mediaContainer.classList.add('active');

    // Update title and description
    const titleElement = document.getElementById('lightbox-title');
    const descriptionElement = document.getElementById('lightbox-description');
    titleElement.textContent = work.title;
    descriptionElement.textContent = work.description;

    // Show the lightbox
    lightboxModal.style.display = 'flex';
}

function closeLightbox() {
    const lightboxModal = document.getElementById('lightbox-modal');
    const mediaContainer = document.querySelector('.media-container');
    
    // Hide the lightbox and remove zoom effect
    lightboxModal.style.display = 'none';
    mediaContainer.classList.remove('active');
}

// Function to change the current item in the lightbox
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= works.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = works.length - 1;
    }
    openLightbox(currentIndex);
}

// Attach event listeners to the document for handling left and right navigation and close button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.querySelector('.arrow.left').addEventListener('click', function() {
        changeImage(-1);
    });
    document.querySelector('.arrow.right').addEventListener('click', function() {
        changeImage(1);
    });
    // Attach click listeners to each work item in the gallery
    document.querySelectorAll('.media-gallery img, .media-gallery video').forEach((item, index) => {
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