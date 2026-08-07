function focusInput(element) {
    element.classList.toggle('form__input-wrapper--focused')
}

function focusSelect(element) {
    element.classList.toggle('form__select-wrapper--focused')
}

const inputs = document.querySelectorAll('.form__input-wrapper input')
const selects = document.querySelectorAll('.form__select-wrapper select')

inputs.forEach(input => {
    input.addEventListener('focus', e => focusInput(input.parentElement))
})

inputs.forEach(input => {
    input.addEventListener('blur', e => focusInput(input.parentElement))
})

selects.forEach(select => {
    select.addEventListener('focus', e => focusSelect(select.parentElement))
})

selects.forEach(select => {
    select.addEventListener('blur', e => focusSelect(select.parentElement))
})