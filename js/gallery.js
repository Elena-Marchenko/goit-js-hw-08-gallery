import importGalleryHistory from './gallery-items.js';


const makeImportGalleryImageMarkup = galeryLinkc => {
    const { preview, original, description } = galeryLinkc;
    
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};



const galeryEl = document.querySelector('.js-gallery');
const makeGalleryListRows = importGalleryHistory.map(makeImportGalleryImageMarkup)
    .join('');

galeryEl.insertAdjacentHTML('beforeend', makeGalleryListRows);
console.log(makeGalleryListRows);