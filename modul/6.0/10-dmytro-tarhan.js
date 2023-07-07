// document.addEventListener('click', clickHandler)
// function clickHandler(event) {
//   console.log(event);
// }

// const obj = {
//   price: 30,
//   count: 10,
// };
// function calcTotalPrice() {
//   console.log(this.price * this.count);
// }

// const buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', calcTotalPrice.bind(obj));
// function changeStyle() {
//   console.dir(this);
//   this.style.backgroundColor = 'yellow';
//   this.textContent = '💥Magik💥';
// }

// let count = 0;
// const buttonElement = document.querySelector('button');
// const counterElement = document.querySelector('.counter');
// buttonElement.addEventListener('click', buttonClick);
// buttonElement.addEventListener('click', showMessage);
// function showMessage() {
//     console.log('hallo')
// }
// function buttonClick() {
//   if (count > 19) {
//     buttonElement.removeEventListener('click', buttonClick);
//     return;
//   }
//   count += 1;
//   counterElement.textContent = count;
// }
// !---------------------------
// document.addEventListener('keyup', showEvent);
// function showEvent(event) {
//   console.log(event.code);
//   console.log(event.key);
//   console.log(event);
// }
// !---------------------------
// const inputElement = document.querySelector('input');
// inputElement.addEventListener('input', showInputValue);
// inputElement.addEventListener('change', showInputValue);
// function showInputValue(event) {
//   console.log(event.currentTarget.checked);
// }
// inputElement.addEventListener('focus', showInputValue);
// inputElement.addEventListener('blur', showInputValue);
// function showInputValue(event) {
//   console.log(event.currentTarget.value);
// }
// inputElement.focus()

// const buttonElement = document.querySelector('button');
// const divElement = document.querySelector('div');

// document.addEventListener('click', showMessage);

// buttonElement.addEventListener('click', stop);
// divElement.addEventListener('click', showMessage)

// function stop(event){
// event.stopPropagation()
// }
// buttonElement.addEventListener('mousedown', showMessage);
// function showMessage() {
//     console.log('Click')
// }
const modalTemplate = `
  <div class="modal hidden">
    <div class="modal__content">
      <span class="modal__close">X</span>
      <h3>Autorisation</h3>
      <form name="modal-form">
        <label>
          Login
          <input type="text" name='login' placeholder="Enter Login" />
        </label>
        <label>
          Password
          <input type="text" name='password' placeholder="Enter Password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', modalTemplate);

const modalElement = document.querySelector('.modal');
const showButtonElement = document.querySelector('.show');
const containerElement = document.querySelector('.modal__content');
const closeElement = document.querySelector('.modal__close');
const formElement = document.querySelector('form');
showButtonElement.addEventListener('click', openModal);
const validLogin = 'events';
const validPassword = 'secret';

function subscribeListners() {
  modalElement.addEventListener('click', closeModal);
  closeElement.addEventListener('click', closeModal);
  containerElement.addEventListener('click', stop);
  document.addEventListener('keyup', checkClose);
  formElement.addEventListener('submit', validateForm);
}
function unSubscribeListners() {
  modalElement.removeEventListener('click', closeModal);
  closeElement.removeEventListener('click', closeModal);
  containerElement.removeEventListener('click', stop);
  document.removeEventListener('keyup', checkClose);
  formElement.removeEventListener('submit', validateForm);
}

function validateForm(event) {
  event.preventDefault();
  const { login, password } = event.currentTarget.elements;
  if (login.value === validLogin && password.value === validPassword) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Login Success!';
    formElement.remove();
    containerElement.append(titleElement);
  } else {
    const errorElement = formElement.querySelector('.error');
    if (errorElement) {
      return;
    }
    const errorTemplate = `<div class='error'>Login or Password is incorrect! Try again😘 </div>`;
    const formButtonElement = formElement.querySelector('button');
    formButtonElement.insertAdjacentHTML('beforebegin', errorTemplate);
  }
}

function checkClose(event) {
  console.log(event);
  if (event.code === 'Escape') {
    closeModal();
  }
}

function stop(event) {
  event.stopPropagation();
}

function openModal() {
  modalElement.classList.remove('hidden');
  subscribeListners();
}

function closeModal() {
  unSubscribeListners();
  modalElement.classList.add('hidden');
}
