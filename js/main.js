const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav__links--open');
  hamburger.classList.toggle('nav__hamburger--open');
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    hamburger.classList.remove('nav__hamburger--open');
  });
});

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentGallery = [];
let currentIndex = 0;

function openLightbox(galleryEl, index) {
  currentGallery = Array.from(galleryEl.querySelectorAll('.thumb'));
  currentIndex = index;
  showCurrent();
  lightbox.classList.add('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function showCurrent() {
  const img = currentGallery[currentIndex];
  lightboxImg.src = img.dataset.full || img.src;
  lightboxImg.alt = img.alt || '';
}

function closeLightbox() {
  lightbox.classList.remove('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

function step(delta) {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex + delta + currentGallery.length) % currentGallery.length;
  showCurrent();
}

document.querySelectorAll('.project-card__gallery').forEach(gallery => {
  gallery.querySelectorAll('.thumb').forEach((thumb, idx) => {
    thumb.addEventListener('click', () => openLightbox(gallery, idx));
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => step(-1));
lightboxNext.addEventListener('click', () => step(1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('lightbox--open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') step(-1);
  else if (e.key === 'ArrowRight') step(1);
});
