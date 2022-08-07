import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', makeGallery(galleryItems));

galleryContainer.addEventListener('click', clickOnImage);


function makeGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `
    }
   ).join('')
}

function clickOnImage (event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return 
  }
  backdroup.element().querySelector('img').src = event.target.dataset.source
  backdroup.show()
}

const backdroup = basicLightbox.create(`<img src="">`, {
  onShow: backdroup => { window.addEventListener('keydown', onEscClick); },
  onClose: backdroup => {window.removeEventListener('keydown', onEscClick);}
})

const onEscClick = (event) => {
  if (event.key === 'Escape') {
    backdroup.close();
    return;
  }
}


console.log(galleryItems);
