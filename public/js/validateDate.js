const dateOfBirthInput = document.querySelector('#date_of_birth')
dateOfBirthInput.max = new Date().toISOString().split('T')[0]
dateOfBirthInput.min = new Date(1900, 0, 1).toISOString().split('T')[0]