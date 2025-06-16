// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Filter functionality
function filterCategory(category) {
  const items = document.querySelectorAll('.art-card');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const links = document.querySelectorAll('[data-lightbox]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const src = this.getAttribute('data-lightbox');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});