window.addEventListener('load', function () {
  let validation = false;
  function validateForm() {



    if(validation) {
      validateForm();
    }
    let submitHash = {
      "developers": false,
      "siteName": false,
      "siteUrl": false,
      "startDate": false,
      "visitors": false,
      "email": false,
      "catalog": false,
      "accommodation": false,
      "reviews": false,
      "description" : false
    };

    let tagsHash = {
      "developers": "developers",
      "siteName": "site-name",
      "siteUrl": "site-url",
      "startDate": "start-date",
      "visitors": "visitors",
      "email": "email",
      "catalog": "catalog",
      "accommodation": "accommodation",
      "reviews": "reviews",
      "description": "description"
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
      "reviews": ['Требуется разрешить отзывы'],
      "description": ['Требуется что-нибудь ввести']
    };

    let form = document.querySelector('form');

    let submitButton = document.getElementById('my-submit');

    //fields
    let developers = document.querySelector('.developers');
    let siteName = document.querySelector('.site-name');
    let siteUrl = document.querySelector('.site-url');
    let startDate = document.querySelector('.start-date');
    let visitors = document.querySelector('.visitors');
    let email = document.querySelector('.email');
    let catalogSelect = document.querySelector('.catalog');
    let accommodationsRadio = document.querySelectorAll('.accommodation');
    let reviewCheckbox = document.querySelector('.reviews');
    let description = document.querySelector('.description');

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
    let descriptionError = document.querySelector('.description-error');



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

    description.addEventListener('blur', function () {
      if(this.value === '') {
        console.log('Заполните поле');
        submitHash.description = false;
        descriptionError.style.display = 'block';
        descriptionError.innerHTML = messages.description[0];
      } else {
        descriptionError.style.display = '';
        submitHash.description = true;
      }
    });





    submitButton.addEventListener('click', function (e) {
      e = e || window.event;
      e.preventDefault();
      if(validateAll()) {
        console.log(form);
        form.submit();
        validation = true;
      }

    });

    function validateAll() {
      let validCounter = 0;
      let counter = 0;
      for(let key in submitHash) {
        switch (key) {
          case "developers":
            if(!submitHash[key] && !developers.value) {
              developersError.style.display = 'block';
              developersError.innerHTML = messages.developers[0];
            } else {
              developersError.style.display = '';
              submitHash.developers = true;
            }
            break;
          case "siteName":
            if(!submitHash[key] && !siteName.value) {
              siteNameError.style.display = 'block';
              siteNameError.innerHTML = messages.siteName[0];
            } else {
              siteNameError.style.display = '';
              submitHash.siteName = true;
            }
            break;
          case "siteUrl":
            if(!submitHash[key] && !siteUrl.value) {
              siteUrlError.style.display = 'block';
              siteUrlError.innerHTML = messages.siteUrl[0];
            } else {
              siteUrlError.style.display = '';
              submitHash.siteUrl = true;
            }
            break;
          case "startDate":
            if(!submitHash[key] && !startDate.value) {
              siteDateError.style.display = 'block';
              siteDateError.innerHTML = messages.startDate[0];
            } else {
              siteDateError.style.display = '';
              submitHash.startDate = true;
            }
            break;
          case "visitors":
            if(!submitHash[key] && !visitors.value) {
              visitorsError.style.display = 'block';
              visitorsError.innerHTML = messages.visitors[0];
            } else {
              visitorsError.style.display = '';
              submitHash.visitors = true;
            }
            break;
          case "email":
            if(!submitHash[key] && !email.value) {
              emailError.style.display = 'block';
              emailError.innerHTML = messages.email[0];
            } else {
              emailError.style.display = '';
              submitHash.email = true;
            }
            break;
          case "catalog":
            let value = catalogSelect.options[catalogSelect.selectedIndex].value;
            if(!submitHash[key] && value === 'null') {
              catalogError.style.display = 'block';
              catalogError.innerHTML = messages.catalog[0];
            } else if(value === 'health') {
              submitHash.catalog = false;
              catalogError.style.display = 'block';
              catalogError.innerHTML = messages.catalog[1];
            }
            else {
              catalogError.style.display = '';
              submitHash.catalog = true;
            }
            break;
          case "accommodation":
            let check = false;
            for(let i = 0; i < accommodationsRadio.length; i++) {
              if(accommodationsRadio[i].checked) {
                check = !check;
                break;
              }
            }
            if(!submitHash[key] && !check) {
              accommodationsError.style.display = 'block';
              accommodationsError.innerHTML = messages.catalog[0];
            } else {
              accommodationsError.style.display = '';
              submitHash.accommodation = true;
            }
            break;
          case "reviews":
            if(!submitHash[key] && !reviewCheckbox.checked) {
              reviewsError.style.display = 'block';
              reviewsError.innerHTML = messages.reviews[0];
            } else {
              reviewsError.style.display = '';
              submitHash.reviews = true;
            }
            break;
          case "description":
            if(!submitHash[key] && !description.value) {
              descriptionError.style.display = 'block';
              descriptionError.innerHTML = messages.description[0];
            } else {
              descriptionError.style.display = '';
              submitHash.description = true;
            }
            break;
        }
        if(!submitHash[key] && counter < 1) {
          let field = document.querySelector(`.${tagsHash[key]}`);
          field.focus();
          ++counter;
        }
        if(submitHash[key]) {
          validCounter++;
        }
      }
      console.log(validCounter);
      if(validCounter == 10) {
        return true;
      } else {
        return false;
      }
    }
  }

  validateForm();

});