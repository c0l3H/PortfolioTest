// script.js
document.querySelector('.horizontal-scroll').addEventListener('wheel', function(e) {
  e.preventDefault();
  this.scrollLeft += e.deltaY;
});