document.addEventListener('DOMContentLoaded', () => {
  const fullscreenBtn = document.getElementById('fullscreenToggle');
  const openModalBtn = document.getElementById('openModal');
  const iframe = document.getElementById('pokeGenIframe');
  const modal = document.getElementById('demoModal');
  const modalIframe = document.getElementById('modalIframe');
  const closeModalBtn = document.getElementById('closeModal');

  // Fullscreen toggle for the iframe container
  fullscreenBtn.addEventListener('click', () => {
    const elem = iframe.parentElement; // the .live-demo-wrapper div
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Open modal and load iframe src
  openModalBtn.addEventListener('click', () => {
    modalIframe.src = iframe.src;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    // Focus for accessibility
    modalCloseBtn.focus();
  });

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modalIframe.src = ''; // Stop loading
  });

  // Close modal on clicking outside iframe
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalBtn.click();
    }
  });

  // Also close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModalBtn.click();
    }
  });
});