/*
inicial/final/salto/botão gerar

fazer um contador progressivo e outro regressivo
se o campo final for maior que o inicial então faz um for regressivo
procurar o codigo de um emoticon

*/

function gerarSequencia() {
    //transformar elementos em variáveis
    //colocar essas variáveis no for
    //verificar se o início é maior que o fim e usar o decremento
    //usar o emoticon

    var res = document.getElementById('res')

    var inicio = document.getElementById('txtInicial').value
    var fim = document.getElementById('txtFinal').value
    var salto = document.getElementById('txtSalto').value

    if (inicio.length == 0 || fim.length == 0 || salto.length == 0)  {
        alert('Erro - preencha os campos')
        return
    }

    inicio = Number(inicio)
    fim = Number(fim)
    salto = Number(salto)
    
    var texto = '';
    if (inicio > fim) {
        for (let c = inicio; c >= fim; c -= salto) {
            texto += `&#9996 ${c}`;
        }
    } else {
        for (let c = inicio; c <= fim; c += salto) {
            texto += `&#9996 ${c}`;
        }
    }

    res.innerHTML = texto
}