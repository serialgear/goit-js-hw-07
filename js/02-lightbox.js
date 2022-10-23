import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(
    (item) =>
      `<li>
     <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
     </a>
</li>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  showCounter: false,
});

console.log(gallery);
console.log(galleryItems);
