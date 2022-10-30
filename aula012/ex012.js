var agora = new Date()
var hora = agora.getHours()
var msg = `Agora são exatamente ${hora} horas. `
if (hora < 6) {
    msg += 'Boa Madruga! Isso é hora de tá dormindo!'
} else if (hora < 12) {
    msg += 'Bom Dia! Luz do Dia!'
} else if (hora < 18) {
    msg += 'Boa Tarde!'
} else {
    msg += 'Boa Noite!'
}
console.log(msg)
