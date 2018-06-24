'use strict';
function dragImages() {
  let images = document.querySelectorAll('.container img');
  let container = document.querySelector('.container');
  let elem;
  let mouseX, mouseY;

  renderAbsoluteImg(images);

  container.addEventListener('mousedown', function (e) {
    e=e||window.event;
    e.preventDefault();

    mouseX = e.clientX - e.target.offsetLeft;
    mouseY = e.clientY - e.target.offsetTop;

    if(e.target.tagName === 'IMG') {
      for(let i = 0; i < images.length; i++) {
        images[i].style.zIndex = 1;
      }
      elem = e.target;
      elem.style.zIndex = 25;
    }

  });

  container.addEventListener('mousemove', function (e) {
    e=e||window.event;
    e.preventDefault();

    if(elem) {
      elem.style.left = e.pageX - mouseX + 'px';
      elem.style.top = e.pageY - mouseY + 'px';
    }

  });


  container.addEventListener('mouseup', function (e) {
    e=e||window.event;
    elem = null;
  });









  function renderAbsoluteImg(img) {

    for(let i = 0; i < img.length; i++) {
      let image = img[i];
      let left = image.offsetLeft;
      let top = image.offsetTop;
      image.style.left = left + 'px';
      image.style.top = top + 'px';
    }

    for(let i = 0; i < img.length; i++) {
      img[i].style.position = 'absolute';
    }

  }


}

dragImages();
