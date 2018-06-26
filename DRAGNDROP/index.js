'use strict';
window.addEventListener('load', function () {
  function dragImages() {
    let images = document.querySelectorAll('.container img');
    let container = document.querySelector('.container');
    let elem;
    let zInd = 0;
    let mouseX, mouseY;

    renderAbsoluteImg(images);


    for(let i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseenter', function (e) {
        elem = e.target;
        elem.style.zIndex = ++zInd;
        elem.ondragstart = function() {
          return false;
        };
        elem.onmousedown = function (e) {
          mouseX = e.clientX - e.target.offsetLeft;
          mouseY = e.clientY - e.target.offsetTop;
          console.log(elem);
          moveAt(e);

          container.onmousemove = function (e) {
            moveAt(e);
          };

          elem.onmouseup = function() {
            container.onmousemove = null;
            elem.onmouseup = null;
          }
        };
      });
    }



    function moveAt(e) {
      elem.style.left = e.pageX - mouseX + 'px';
      elem.style.top = e.pageY - mouseY + 'px';
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
