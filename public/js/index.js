async function deleteContact(id) {
    return await fetch(`http://localhost:3000/contacts/${id}`, {
        method: 'delete'
    })
}

const btnNewContact = document.querySelector('#btn-new-contact')
const btnDeletes = document.querySelectorAll('.btn-delete-contact')

btnNewContact.addEventListener('click', e => {
    const formNewContact = document.querySelector('.new-contact')
    formNewContact.classList.toggle('new-contact--expanded')
})

btnDeletes.forEach(btn => {
    btn.addEventListener('click', e => {
        deleteContact(btn.id).then(response => {
            if (response.status === 204) {
                window.location.href = '/'
            }
        })
    })
})