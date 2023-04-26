const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

function openModal(img) {
	modal.style.display = 'block';
	modalImg.src = img.src;
}

function closeModalFn() {
	modal.style.display = 'none';
}

gallery.querySelectorAll('img').forEach(img => {
	img.addEventListener('click', () => {
		openModal(img);
	});
});

closeModal.addEventListener('click', () => {
	closeModalFn();
});

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModalFn();
	}
});