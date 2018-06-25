window.addEventListener('load', function () {
  function validateForm() {
    let submitHash = {
      "developers": false,
      "siteName": false,
      "siteUrl": false,
      "startDate": false,
      "visitors": false,
      "email": false,
      "catalog": false,
      "accommodation": false,
      "reviews": false
    };

    let messages = {
      "developers": ['Требуется ввести название разработчиков'],
      "siteName": ['Требуется ввести название сайта'],
      "siteUrl": ['Требуется ввести URL сайта'],
      "startDate": ['Требуется ввести дату запуска', 'Введите дату в формате DD/MM/YYYY'],
      "visitors": ['Требуется ввести кол-во посетителей'],
      "email": ['Требуется ввести email'],
      "catalog": ['Необходимо выбрать один вариант', 'Выберите что угодно, кроме здоровья'],
      "accommodation": ['Требуется выбрать размещение'],
      "reviews": ['Требуется разрешить отзывы']
    };

    let submitButton = document.getElementById('submit');

    //fields
    let developers = document.getElementById('developers');
    let siteName = document.getElementById('site-name');
    let siteUrl = document.getElementById('site-url');
    let startDate = document.getElementById('start-date');
    let visitors = document.getElementById('visitors');
    let email = document.getElementById('email');
    let catalogSelect = document.getElementById('catalog');
    let accommodationsRadio = document.querySelectorAll('.accommodation');
    let reviewCheckbox = document.getElementById('reviews');

    //errors
    let developersError = document.querySelector('.developers-error');
    let siteNameError = document.querySelector('.site-name-error');
    let siteUrlError = document.querySelector('.site-url-error');
    let siteDateError = document.querySelector('.start-date-error');
    let visitorsError = document.querySelector('.visitors-error');
    let emailError = document.querySelector('.email-error');
    let catalogError = document.querySelector('.catalog-error');
    let accommodationsError = document.querySelector('.accommodations-error');
    let reviewsError = document.querySelector('.reviews-error');



    developers.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.developers = false;
        developersError.style.display = 'block';
        developersError.innerHTML = messages.developers[0];
      } else {
        developersError.style.display = '';
        submitHash.developers = true;
      }
    });

    siteName.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.siteName = false;
        siteNameError.style.display = 'block';
        siteNameError.innerHTML = messages.siteName[0];
      } else {
        siteNameError.style.display = '';
        submitHash.siteName = true;
      }
    });

    siteUrl.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.siteUrl = false;
        siteUrlError.style.display = 'block';
        siteUrlError.innerHTML = messages.siteUrl[0];
      } else {
        siteUrlError.style.display = '';
        submitHash.siteUrl = true;
      }
    });

    startDate.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.startDate = false;
        siteDateError.style.display = 'block';
        siteDateError.innerHTML = messages.startDate[0];
      } else {
        siteDateError.style.display = '';
        submitHash.startDate = true;
      }
    });

    visitors.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.visitors = false;
        visitorsError.style.display = 'block';
        visitorsError.innerHTML = messages.startDate[0];
      } else {
        visitorsError.style.display = '';
        submitHash.visitors = true;
      }
    });

    email.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.email = false;
        emailError.style.display = 'block';
        emailError.innerHTML = messages.email[0];
      } else {
        emailError.style.display = '';
        submitHash.email = true;
      }
    });

    catalogSelect.addEventListener('change', function () {
      let value = this.options[this.selectedIndex].value;
      if(value === 'null') {
        console.log(value);
        submitHash.catalog = false;
        catalogError.style.display = 'block';
        catalogError.innerHTML = messages.catalog[0];
      } else if(value === 'health') {
        submitHash.catalog = false;
        catalogError.style.display = 'block';
        catalogError.innerHTML = messages.catalog[1];
      } else {
        catalogError.style.display = '';
        submitHash.catalog = true;
      }
    });


    for(let i = 0; i < accommodationsRadio.length; i++) {
      accommodationsRadio[i].addEventListener('change', function () {
        if (accommodationsRadio[i].checked) {
          submitHash.accommodation = true;
          accommodationsError.style.display = '';
          return;
        }
      });

    }

    reviewCheckbox.addEventListener('change', function () {
      if(this.checked) {
        submitHash.reviews = true;
        reviewsError.style.display = '';
      } else {
        submitHash.reviews = false;
      }
    });





    submitButton.addEventListener('click', function (e) {
      e = e || window.event;
      e.preventDefault();
      validateAll();

    });

    function validateAll() {
      for(let key in submitHash) {
        switch (key) {
          case "developers":
            if(!submitHash[key]) {
              developersError.style.display = 'block';
              developersError.innerHTML = messages.developers[0];
            } else {
              developersError.style.display = '';
            }
            break;
          case "siteName":
            if(!submitHash[key]) {
              siteNameError.style.display = 'block';
              siteNameError.innerHTML = messages.siteName[0];
            } else {
              siteNameError.style.display = '';
            }
            break;
          case "siteUrl":
            if(!submitHash[key]) {
              siteUrlError.style.display = 'block';
              siteUrlError.innerHTML = messages.siteUrl[0];
            } else {
              siteUrlError.style.display = '';
            }
            break;
          case "startDate":
            if(!submitHash[key]) {
              siteDateError.style.display = 'block';
              siteDateError.innerHTML = messages.startDate[0];
            } else {
              siteDateError.style.display = '';
            }
            break;
          case "visitors":
            if(!submitHash[key]) {
              visitorsError.style.display = 'block';
              visitorsError.innerHTML = messages.visitors[0];
            } else {
              visitorsError.style.display = '';
            }
            break;
          case "email":
            if(!submitHash[key]) {
              emailError.style.display = 'block';
              emailError.innerHTML = messages.email[0];
            } else {
              emailError.style.display = '';
            }
            break;
          case "catalog":
            if(!submitHash[key]) {
              catalogError.style.display = 'block';
              catalogError.innerHTML = messages.catalog[0];
            } else {
              catalogError.style.display = '';
            }
            break;
          case "accommodation":
            if(!submitHash[key]) {
              accommodationsError.style.display = 'block';
              accommodationsError.innerHTML = messages.catalog[0];
            } else {
              accommodationsError.style.display = '';
            }
            break;
          case "reviews":
            if(!submitHash[key]) {
              reviewsError.style.display = 'block';
              reviewsError.innerHTML = messages.reviews[0];
            } else {
              reviewsError.style.display = '';
            }
            break;
        }
      }
    }
  }

  validateForm();

});