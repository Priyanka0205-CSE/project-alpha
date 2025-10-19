const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.add(savedTheme);
};

// Toggle between themes when clicked
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  // Save the user’s choice
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
