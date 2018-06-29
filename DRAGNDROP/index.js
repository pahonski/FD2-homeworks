'use strict';
window.addEventListener('load', function () {
  function dragImages() {
    let images = document.querySelectorAll('.container img');
    let container = document.querySelector('.container');
    let zInd = 0;
    let elem;
    let mouseX, mouseY;
    console.log(images);
    renderAbsoluteImg(images);

    container.onmouseover = function (e) {
      if(e.target.tagName === 'IMG') {
        e.target.style.cursor = 'move'
      }
    };

    container.addEventListener('mousedown', myFc);

    container.onmouseup = function () {
      elem = '';
      container.removeEventListener('mousemove', moveAt);
    };

    function myFc(e) {
      e = e || window.event;
      mouseX = e.clientX - e.target.offsetLeft;
      mouseY = e.clientY - e.target.offsetTop;
      if(e.target.tagName === 'IMG') {
        elem = e.target;
        elem.style.zIndex = ++zInd;
        elem.ondragstart = function() {
          return false;
        };
      }
      container.addEventListener('mousemove', moveAt);
    }


    function moveAt(e) {
      if (elem) {
        elem.style.left = e.pageX - mouseX + 'px';
        elem.style.top = e.pageY - mouseY + 'px';
      }

    }

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
