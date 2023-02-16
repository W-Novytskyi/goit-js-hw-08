// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const imagesList = galleryItems.map(({ preview, original, description }) => {
    
// return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
//     </div>`;
// }).join('');

// galleryEl.insertAdjacentHTML('beforeend', imagesList);
// galleryEl.addEventListener('click', onImgOriginalCard);

// function onImgOriginalCard(e) {
//     e.preventDefault();
//     if (!e.target.dataset.source) {
//         return
//     }
    
//     // console.log(e.target);
    
//     const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">
//     `)
    
//     instance.show();
// };