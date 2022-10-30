var idade = 16
var msg = ``
console.log(`Você em ${idade} anos.`)
if (idade < 16) {
    msg = `Não Vota!`
} else if (idade < 18 || idade > 65) {
    msg = `Vota se quiser! mas vote que é importante ;)`
} else {
    msg = `Voto é obrigatório!!! mais ou menos né ?! Pode justificar...`
}
console.log(msg)