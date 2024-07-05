// Add active class to current link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const removeActiveClass = (link) => link.classList.remove('active');
  const addActiveClass = (link) => link.classList.add('active');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(removeActiveClass);
      addActiveClass(link);
    });
  });
});