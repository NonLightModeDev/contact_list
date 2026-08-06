function verifyPassword(e) {
  const passwordInput = e.target
  const field = passwordInput.parentElement.parentElement
  const password = passwordInput.value
  const lengthPassword = password.length
  const passwordStrengthIndicator = field.querySelector('.password-strength-indicator')

  if (lengthPassword !== 0) field.classList.add('checking-password')
  else field.classList.remove('checking-password')

  const upperCases = (
    password.match(/[A-Z]+/) ? password.match(/[A-Z]+/)[0] : []
  ).length
  const digits = (password.match(/[0-9]+/) ? password.match(/[0-9]+/)[0] : [])
    .length
  const specials = (
    password.match(/[^a-zA-Z0-9\s]+/)
      ? password.match(/[^a-zA-Z0-9\s]+/)[0]
      : []
  ).length

  if (lengthPassword < 8) {
    passwordStrengthIndicator.classList.forEach(c => {
      if (c !== 'password-strength-indicator') passwordStrengthIndicator.classList.remove(c)
    })
    passwordStrengthIndicator.classList.add('weak-password')
  } else {
    if (upperCases >= 1 && digits >= 1 && specials >= 1) {
      passwordStrengthIndicator.classList.forEach(c => {
        if (c !== 'password-strength-indicator') passwordStrengthIndicator.classList.remove(c)
      })
      passwordStrengthIndicator.classList.add('strong-password')
    } else if (upperCases >= 1 && digits >= 1 || specials >= 1) {
      passwordStrengthIndicator.classList.forEach(c => {
        if (c !== 'password-strength-indicator') passwordStrengthIndicator.classList.remove(c)
      })
      passwordStrengthIndicator.classList.add('moderate-strength-password')
    }
  }
}
const passwordInput = document.querySelector('#password')
passwordInput.addEventListener('keydown', verifyPassword)
passwordInput.addEventListener('keyup', verifyPassword)
passwordInput.addEventListener('blur', verifyPassword)