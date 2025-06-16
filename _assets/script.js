// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const links = document.querySelectorAll('.art-link');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const src = this.querySelector('img').src;
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});