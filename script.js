const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_pass');
const submit = document.querySelector('button');

submit.addEventListener('click', (e)=> {
  if (password.value != confirmPassword.value) {
    e.preventDefault();
    alert('ERROR! MISMATCH PASSWORD')
  }
})