//GALERIA MODAL
const images = document.querySelectorAll('.imgCard img');
const modal = document.querySelector('.galeriaModal');
const imgModal = document.querySelector('#imgModal');
const cierreModal = document.querySelector('.cierreModal');
const captionModal = document.querySelector('.captionModal');
const listaGaleria = document.querySelectorAll('.listaGaleria');

images.forEach((images) => {
	images.addEventListener('click', () => {
		modal.style.display = 'block';
		imgModal.src = images.src;
		captionModal.innerHTML = images.alt;
	});
});

listaGaleria.forEach(img  => img.addEventListener('click', lightbox));
	function lightbox  (event){
		imgModal.src = event.target.src;
		captionModal.innerHTML = event.target.alt;
	}

	cierreModal.addEventListener('click', () => {
    modal.style.display = "none";
});