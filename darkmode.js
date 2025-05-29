const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode on page load
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Toggle dark mode on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    toggleBtn.textContent = '🌙';
  }
});