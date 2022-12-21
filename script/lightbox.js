let slideIndex = 1;
showSlide(slideIndex);


function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};


function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};


function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};


let slideIndexSecond = 1;
showSlidesSecond(slideIndexSecond);


function openLightboxSecond() {
  document.getElementById('Lightbox-second').style.display = 'block';
}

function closeLightboxSecond() {
  document.getElementById('Lightbox-second').style.display = 'none';
};


function changeSlideSecond(n) {
  showSlidesSecond(slideIndexSecond += n);
};

function toSlideSecond(n) {
  showSlidesSecond(slideIndexSecond = n);
};


function showSlidesSecond(n) {
  const slides = document.getElementsByClassName('slide-second');
  let modalPreviewSecond = document.getElementsByClassName('modal-preview-second');

  if (n > slides.length) {
    slideIndexSecond = 1;	
  };
  
  if (n < 1) {
    slideIndexSecond = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviewSecond.length; i++) {
    modalPreviewSecond[i].className = modalPreviewSecond[i].className.replace(' active', '');
  };
  
  slides[slideIndexSecond - 1].style.display = 'block';
  modalPreviewSecond[slideIndexSecond - 1].className += ' active';
};