// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

const imagesList = galleryItems.map(({ preview, original, description }) => {
    
return `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', imagesList);

const lightbox = new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: 250, });