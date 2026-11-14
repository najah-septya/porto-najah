// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);

    if (correspondingLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        correspondingLink.classList.add('active');
      } else {
        correspondingLink.classList.remove('active');
      }
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;

    // Simulate sending message
    formStatus.textContent = `Terima kasih, ${name}! Pesan kamu telah terkirim (mode latihan simulasi).`;
    formStatus.classList.add('success');

    contactForm.reset();

    setTimeout(() => {
      formStatus.style.display = 'none';
      formStatus.classList.remove('success');
    }, 5000);
  });
}

