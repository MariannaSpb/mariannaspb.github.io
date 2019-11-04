import "./style.css";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';


// const cityInputSelect = document.querySelector('#city');
const items = document.querySelectorAll('.profile__form-list-item');
const select = document.querySelectorAll('.profile__form-input-select');
const checkboxes = document.querySelectorAll(".profile__form-skills-check");
const result = document.querySelector('#check-result')
const skillsContainer = document.querySelector('.profile__form-input-select--skills')
const skillsList = document.querySelector(".profile__form-list-skills");
const menuToggle = document.querySelector('.header__menu-toggle');
const menuNavigation = document.querySelector('.header__menu');
const loginButton = document.querySelector('.header__login');
const counter = document.querySelector('.profile__form-text');
const counterCloseButton = document.querySelector('.profile__form-close');
const form = document.querySelector('.profile__form-form');
const inputWrapper = '.profile__form-input-wrapper';
const profileFormList = '.profile__form-list';
const previewBtn = document.querySelector('.vacancy__preview-button');
const contactHidden = document.querySelector('.vacancy__preview-contact');
const loginPopup = document.querySelector('.header__login-popup');
const inputs = document.querySelectorAll('.profile__form-input');
const saveButton = document.querySelector('.profile__form-save');


if(previewBtn) {
previewBtn.addEventListener('click', (event) =>{
  contactHidden.classList.toggle('hidden');
  if (event.target.closest('.vacancy__preview-button')) {
    previewBtn.classList.toggle('vacancy__preview-button--active');
    };
  });
}



if(select) {

select.forEach(item => {
  item.addEventListener("click", (event) => {
    if (event.target.closest(inputWrapper).querySelector(profileFormList)) {
      event.target.closest(inputWrapper).querySelector(profileFormList).classList.toggle('hidden')
      event.target.closest(inputWrapper).querySelector('.profile__form-arrow').classList.toggle('profile__form-arrow--toggled')
    };
  });
});


items.forEach(item => {
    item.addEventListener("click", (event) => {
      const input = event.target.closest(inputWrapper).querySelector('.profile__form-input')
      input.value = item.textContent;
      input.classList.remove('error');
    event.target.parentNode.classList.add('hidden'); // список - родитель элемента  item

    event.target.closest(inputWrapper).querySelector('.profile__form-arrow').classList.toggle('profile__form-arrow--toggled')
    });
  });

}


  if(skillsList) {

  skillsContainer.addEventListener('click', (event) => {
      skillsList.classList.toggle('hidden');
      event.target.closest(inputWrapper).querySelector('.profile__form-arrow').classList.toggle('profile__form-arrow--toggled')
  });
  
  checkboxes.forEach(item => {
    item.addEventListener("change", (event) => {
      counter.classList.remove('hidden');
      const checkboxesChecked = document.querySelectorAll("input:checked");
      result.textContent = checkboxesChecked.length;
      skillsList.classList.toggle('hidden');
      
      event.target.closest(inputWrapper).querySelector('.profile__form-arrow').classList.toggle('profile__form-arrow--toggled')

    });
  });

  counterCloseButton.addEventListener('click', (event) => {
    console.log('btn', counterCloseButton)
    result.textContent = "";
    counter.classList.add('hidden');
    if (event.target.closest('.profile__form-close')) {
      skillsList.classList.toggle('hidden');
    };
    checkboxes.forEach(item => {
      if (item.type=='checkbox') {
        item.checked = false;
          }
    });
    event.target.closest(inputWrapper).querySelector('.profile__form-arrow').classList.toggle('profile__form-arrow--toggled')

  });
};


//меню навигации в шапке сайта
menuToggle.addEventListener('click', () => {
  if (menuNavigation.classList.contains('header__menu--closed')) {
    menuNavigation.classList.remove('header__menu--closed');
    menuNavigation.classList.add('header__menu--opened');
    loginButton.classList.add('active')
  } else {
    menuNavigation.classList.add('header__menu--closed');
    menuNavigation.classList.remove('header__menu--opened');
    loginButton.classList.remove('active');
  }
});



if(loginButton) {

  loginButton.addEventListener('click', () => {
    console.log(loginButton)
    loginPopup.classList.toggle('hidden');
  });

}



if(saveButton) {


inputs.forEach((item) => {
  item.addEventListener('input', () => {
    if (item.value !== '') {
      item.classList.add('focused')
    } else {
      item.classList.remove('focused')
    }
  });

  item.addEventListener('blur', () => {
    if (!item.value.length) {
      item.classList.remove('focused')
      item.classList.remove('error')
    } 
  });

});

inputs.forEach((item) => {
  item.addEventListener('blur', () => {
    if (item.value.length) {
      item.classList.remove('focused')
      item.classList.remove('error')
    } 
  });
});






saveButton.addEventListener('click', (evt) => {
  // let valueLength = evt.target.value.length;
  inputs.forEach(item => {
    if (item.value.length === 0) {
      item.classList.add('error')
      evt.preventDefault();
    }
    if (item.value.length > 0) {
      item.classList.remove('error')
    }
  })
});

}


//датапикер
if(form) {
  flatpickr(form.querySelector('input[name= birthday]'), {
    altInput: true,
    allowInput: true,
    enableTime: true,
    altFormat: 'd.m.y',
    disableMobile: "true",
  });

}



