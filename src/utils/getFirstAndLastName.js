function getFirstAndLastName(name) {
    const parts = name.split(' ')
    const firstName = parts[0]
    const lastName = parts.length >= 2? parts[parts.length-1] : null

    return {
        firstName,
        lastName
    }
}

export default getFirstAndLastName