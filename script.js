const images = document.querySelectorAll('.city__image img');

images.forEach(img => {
  img.addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    img.style.transform = `scale(1.2) translate(${x}px, ${y}px)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) translate(0,0)';
  });
});
