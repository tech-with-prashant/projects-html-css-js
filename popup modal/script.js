const modal = document.querySelector('.modal');
const modalTriggerBtn = document.querySelector('.modal-trigger');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function toggleModal() {
  modal.classList.toggle('show');
}

function handleWindowClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

modalTriggerBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);
window.addEventListener('click', handleWindowClick);
