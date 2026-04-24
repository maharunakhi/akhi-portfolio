const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('.site-nav a');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('show');
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(`.site-nav a[href="#${sectionId}"]`);

    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
