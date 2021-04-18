import importGalleryHistory from './gallery-items.js';

const galleryEl = document.querySelector('.js-gallery');

function makeGalleryRows (items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
    }).join('');
    
};

const galeryMarkup = makeGalleryRows(importGalleryHistory); // отрендеренная разметка
galleryEl.insertAdjacentHTML('afterbegin', galeryMarkup); //Добавляет разметку в галлерею

galleryEl.addEventListener('click', onOpenModal);

const refs = {
    lightboxOpenEl: document.querySelector('.js-lightbox'),
    closeModalBtnEl: document.querySelector('[data-action="close-lightbox"]'),
    lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
    lightboxImageEl: document.querySelector('.lightbox__image'),
};
console.log(refs.lightboxImageEl);


function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
        refs.lightboxOpenEl.classList.add('is-open'); //!!!
        refs.lightboxImageEl.src = e.target.dataset.source;
        refs.lightboxImageEl.alt = e.target.alt;
        refs.closeModalBtnEl.addEventListener('click', onCloseModal);
        refs.lightboxOverlayEl.addEventListener('click', onCloseOverlay);

    }
    
};

function onCloseModal() {
    refs.lightboxOpenEl.classList.remove('is-open');
    refs.lightboxImageEl.src = '';
    refs.lightboxImageEl.alt = '';
};

function onCloseOverlay(e) {
    if (e.currentTarget === e.target){
        onCloseModal();
    }
};






