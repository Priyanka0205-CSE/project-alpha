const searchBox = document.getElementById('search-box');
const items = document.querySelectorAll('#items-list li');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  items.forEach(item => {
    if(item.textContent.toLowerCase().includes(query)){
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
