import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputData = document.getElementById('input');
const textareaData = document.getElementById('textarea');
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);

if (parsedData !== null) {
  document.getElementById('input').value = parsedData.email;
  document.getElementById('textarea').value = parsedData.message;
}

function saveData(evt) {
  evt.preventDefault();

  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(`Email: ${inputData.value}, Message: ${textareaData.value}`);
  evt.currentTarget.reset();

  alert('Dane zostały wysłane!');
}

const formValue = document.querySelector('.feedback-form');

formValue.addEventListener('input', throttle(collectFormData, 500));
//osobiście bym zmieniła te 500 milisekund na 2sec. albo sec.>2sec.
formValue.addEventListener('submit', saveData);

function collectFormData() {
  const object = { email: inputData.value, message: textareaData.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(object));

  console.log(`Email: ${inputData.value}, Message: ${textareaData.value}`);
}
