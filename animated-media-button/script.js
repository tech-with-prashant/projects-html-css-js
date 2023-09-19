const mediaBtn = document.querySelector('.media-btn');

mediaBtn.addEventListener('click', function (e) {
  e.preventDefault();
  mediaBtn.classList.toggle('pause');
});
