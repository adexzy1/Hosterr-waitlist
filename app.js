//variables
const waitListBtn = document.querySelector('.form button');
const input = document.querySelector('.form input');

//function
waitListBtn.addEventListener('click', validateForm);

function validateForm() {
  console.log('clicked');
  const inputValue = input.value;
  if (!inputValue.includes('@') || !inputValue.includes('.com')) {
    input.style.border = '1px solid red';
  } else {
    input.style.border = 'none';
  }
}
