// Toggle class active pada navbar
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#menu');

// Ketika menu diklik, toggle class 'active'
menu.onclick = (e) => {
  e.stopPropagation(); // Mencegah klik pada menu men-trigger event listener 'click' di document
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan class 'active'
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Function to toggle sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'flex';
}
