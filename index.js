const itemsPerPage = 8;
const gallery = document.querySelector('.gallery');
const pagination = document.querySelector('.pagination');

const totalItems = 30;
const totalPages = Math.ceil(totalItems / itemsPerPage);

function displayPage(pageNumber) {
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  gallery.innerHTML = '';

  for (let i = start; i < end && i < totalItems; i++) {
    const img = document.createElement('img');
    img.src = `Bahrom/flower${i + 1}.jpg`;
    gallery.appendChild(img);
  }
}

function createPaginationButtons() {
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      displayPage(i);
    });
    pagination.appendChild(button);
  }
}

displayPage(1);
createPaginationButtons();
