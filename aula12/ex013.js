var agora = new Date()
var diaSem = agora.getDay()
var diaNome = ""
switch (diaSem) {
    case 0:
        diaNome = "DOMINGO"
        break;
    case 1:
        diaNome = "SEGUNDA"
        break;
    case 2:
        diaNome = "TERÇA"
        break;
    case 3:
        diaNome = "QUARTA"
        break;
    case 4:
        diaNome = "QUINTA"
        break;
    case 5:
        diaNome = "SEXTA"
        break;
    case 6:
        diaNome = "SÁBADO"
        break;
    default:
        diaNome = "Erro"
        break;
}

console.log(`O dia é ${diaSem} - ${diaNome}`)
