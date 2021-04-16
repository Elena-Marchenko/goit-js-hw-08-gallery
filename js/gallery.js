import importGalleryHistory from './gallery-items.js';


const galeryEl = document.querySelector('.js-gallery');
const galeryMarkup = makeGalleryRows(importGalleryHistory);
galeryEl.insertAdjacentHTML('beforeend', galeryMarkup);

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

}






