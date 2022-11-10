let numeros = []
function adicionar() {
    let num = document.getElementById('txtNum').value;
    let res = document.getElementById('res');
    let select = document.getElementById('selNum')


    //validação
    if (num.length == 0) {
        alert('O número não pode ser vazio')
        return
    }
    num = Number(num);

    if (!isNumero(num)) {
        alert('O número precisa ficar entre 0 e 100')
        return
    }

    if (inLista(num, numeros)) {
        alert('O número não pode ser repetido')
        return
    }

    numeros.push(Number(num))
    let option = document.createElement('option')
    option.text = `Valor ${num} adicionado`
    select.appendChild(option)

    res.innerHTML = ''

    document.getElementById('txtNum').value = ''
    document.getElementById('txtNum').focus()

}

function finalizar() {
    let res = document.getElementById('res');

    if (numeros.length == 0) {
        alert('Adicione valores')
        return
    }

    res.innerHTML = ''

    let total = numeros.length;
    let maior = numeros[0];
    let menor = numeros[0];
    let somar = 0;
    let media = 0;
    //teste
    for (let pos in numeros) {
        let daVez = numeros[pos];
        if (daVez > maior) {
            maior = daVez
        }
        if (daVez < menor) {
            menor = daVez
        }
        somar += daVez
    }
    media = somar / total

    let texto = `<p>Ao todo, temos ${total} números cadastrados.</p>`
    texto += `<p>O maior valor informado foi ${maior}</p>`
    texto += `<p>O menor valor informado foi ${menor}</p>`
    texto += `<p>Somando todos os valores, temos ${somar} </p>`
    texto += `<p>A média dos valores digitados é  ${media}</p>`

    res.innerHTML = texto
}

function isNumero(numero) {
    if (numero >= 1 && numero <= 100) {
        return true
    }
    return false
}
function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    }
    return false
}