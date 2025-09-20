const loading = document.getElementById('loading');
const enterBtn = document.getElementById('enter');
const mainContent = document.getElementById('mainContent');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalExcerpt = document.getElementById('modalExcerpt');
const closeModal = document.getElementById('closeModal');

enterBtn.addEventListener('click', () => {
  loading.classList.add('hidden');
  mainContent.classList.remove('hidden');
});

document.querySelectorAll('.post').forEach(post => {
  post.addEventListener('click', () => {
    modalTitle.textContent = post.dataset.title;
    modalDate.textContent = post.dataset.date;
    modalExcerpt.textContent = post.dataset.excerpt + ' — obsah příspěvku by zde pokračoval.';
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
