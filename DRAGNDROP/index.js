'use strict';
window.addEventListener('load', function () {
  function dragImages() {
    let images = document.querySelectorAll('.container img');
    let container = document.querySelector('.container');
    let elem;
    let mouseX, mouseY;
    let index = 0;

    renderAbsoluteImg(images);


    container.addEventListener('mouseover', function (e) {
        e=e||window.event;
        if(e.target.tagName === 'IMG') {
          e.target.style.cursor = 'move';
        }
    });


    container.addEventListener('mousedown', function (e) {
      e=e||window.event;
      e.preventDefault();

      mouseX = e.clientX - e.target.offsetLeft;
      mouseY = e.clientY - e.target.offsetTop;

      if(e.target.tagName === 'IMG') {
        elem = e.target;
        elem.style.zIndex = ++index;
        elem.addEventListener('mousemove', function (e) {
            e=e||window.event;
            e.preventDefault();
            if (e.target.tagName === 'IMG') {
                e.target.style.cursor = 'move';
            }
            if(elem) {
                elem.style.left = e.pageX - mouseX + 'px';
                elem.style.top = e.pageY - mouseY + 'px';
            }
        });
      }

    });


    container.addEventListener('mouseup', function (e) {
      e=e||window.event;
      elem.removeEventListener('mousemove', function (e) {
          e=e||window.event;
          e.preventDefault();
          if(elem) {
              elem.style.left = e.pageX - mouseX + 'px';
              elem.style.top = e.pageY - mouseY + 'px';
          }
        });
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

});

