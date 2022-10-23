import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsMarkup = ({ preview, original, description }) => {
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
  `;
};

const galleryItemsSort = galleryItems.map(galleryItemsMarkup).join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsSort);

galleryEl.addEventListener("click", onImageScaleClick);

function onImageScaleClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  modalShow(event.target.dataset.source);
}

let instance;

function modalShow(src) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: (instance) => {
        addListener();
      },
      onClose: (instance) => {
        removeListener();
      },
    }
  );
  instance.show();
}
function addListener() {
  window.addEventListener("keydown", onEscapeBtn);
}
function removeListener() {
  window.removeEventListener("keydown", onEscapeBtn);
}
function onEscapeBtn(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

// console.log(galleryItems);
