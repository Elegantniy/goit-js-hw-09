const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('textarea');

const savedInput = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

onDataInInput();

function onInput() {
  const inputObj = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(savedInput, JSON.stringify(inputObj));
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    alert('all fields must be filled');
  }
  console.log(JSON.parse(localStorage.getItem(savedInput)));

  e.target.reset();
  localStorage.removeItem(savedInput);
}

function onDataInInput() {
  const savedData = JSON.parse(localStorage.getItem(savedInput));
  if (savedData) {
    email.value = savedData.email;
    textarea.value = savedData.message;
  }
}
