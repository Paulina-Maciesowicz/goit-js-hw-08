const inputData = document.getElementById('input').value;
const textareaData = document.getElementById('textarea').value;
const LOCALSTORAGE_KEY = 'feedback-form-state';

function saveData(evt) {
  evt.preventDefault();
  localStorage.setItem('inputData', inputData);
  localStorage.setItem('textareaData', textareaData);

  alert('Dane zostały zapisane!');
}

// const form = document.querySelector('form.input#email');
// const input = document.querySelector('#input');
// const textarea = document.querySelector('#textarea');

// const LOCALSTORAGE_KEY = 'feedback-form-state';
// console.log(input);

// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   input.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
