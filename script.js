const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message){
    successMsg.style.display = 'block';
    form.reset(); // Clear form fields
  } else {
    alert('Please fill all fields');
  }
});
