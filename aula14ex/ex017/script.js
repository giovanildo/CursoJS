/** 
 * campo para o número da tabuada
 * quando for 0 mudar para 1
 * 
 */
/* 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.appendChild(img)*/
function gerarTabuada() {
    var res = document.getElementById('res')
    var numTab = document.getElementById('txtTabuada').value
    if (numTab.length == 0) {
        alert('Digite um número para poder ser gerado a tabuada')
        return
    }

    numTab = Number(numTab);

    if (numTab == 0) {
        alert('Tabuada de zero é igual a zero, mudando para 1')
        numTab = 1
    }

    //res.innerHTML = `<p>Tabuada de ${numTab}</p>`

    var selTabuada = document.getElementById('selTabuada')
    selTabuada.options.length = 0;
    for (let c = 0; c <= 10; c++) {
        var option = document.createElement('option')
        option.value = c
        option.text = `${c} x ${numTab} = ${numTab * c}`
        selTabuada.appendChild(option);
    }


}