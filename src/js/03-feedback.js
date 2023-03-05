const LOCALSTORAGE_KEY = 'feedback-form-state';

function saveData(evt) {
  evt.preventDefault();
  const inputData = document.getElementById('input').value;
  const textareaData = document.getElementById('textarea').value;
  localStorage.setItem('feedback-form-state', inputData);
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

const messageInput = document.querySelector('.feedback-form');

messageInput.addEventListener('input', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  // if (email.value === '' || message.value === '') {
  //   return alert('Please fill in all the fields!');
  // }

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
}
