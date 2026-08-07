function getAvatarInitials(name) {
    const initials = name.split(' ').map(n => n[0].toUpperCase())
    const avatar_initials = initials.length >= 2? [initials[0], initials[initials.length-1]] : [initials[0]]
    return avatar_initials
}

export default getAvatarInitials