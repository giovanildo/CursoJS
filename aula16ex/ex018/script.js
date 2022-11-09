let numeros = []
function adicionar() {
    let num = document.getElementById('txtNum').value;
    let res = document.getElementById('res');
    let select = document.getElementById('selNum')
    res.innerHTML = ''


    if (num.length == 0) {
        alert('O número não pode ser vazio')
        return
    }

    num = Number(num);

    let option = document.createElement('option')
    option.text = `Valor ${num} adicionado`
    select.appendChild(option)

    numeros.push(num)

    let soma = somar(numeros)
    //validação de dados
    //adicionar via appendchild
    //adicionar array
    //fazer as operações 
    // mostrar na div res
    //clicar em adicionar, sempre limpar o  res


}

function somar(array) {
    let soma = 0;

    for (let index = 0; index < array.length; index++) {
        soma += array[index];
    }

    return soma;
}
function maior(array) {
    let maior = 0;
    for (let index = 0; index < array.length; index++) {
        let daVez = array[index]
        if (daVez > maior) {
            maior = daVez;
        }
    }
    return maior;
}
function menor(array) {
    let menor = 0;
    for (let index = 0; index < array.length; index++) {
        const daVez = array[index];
        if (menor == 0) {
            menor = daVez
        }

        if (daVez < menor) {
            menor = daVez;
        }
    }
    return menor;
}
function media(array) {
    return somar(array)/array.length
}


function finalizar() {
    let res = document.getElementById('res');
    let texto = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
    texto += `<p>O maior valor informado foi ${maior(numeros)}</p>`
    texto += `<p>O menor valor informado foi ${menor(numeros)}</p>`
    texto += `<p>Somando todos os valores, temos ${somar(numeros)} </p>`
    texto += `<p>A média dos valores digitados é  ${media(numeros)}</p>`

    res.innerHTML = texto
}

let nums = [1, 10, 5, 7]


console.log(somar(nums))