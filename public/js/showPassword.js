const btnShowPassword = document.querySelector('#show-password')
btnShowPassword.addEventListener('click', e => {
  const passwordInput = document.querySelector('#password')
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
    btnShowPassword.textContent = 'visibility_off'
  } else {
    passwordInput.type = 'password'
    btnShowPassword.textContent = 'visibility'
  }
})
