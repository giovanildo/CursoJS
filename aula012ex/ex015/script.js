function verificar() {
    var anoAtual = Number(new Date().getFullYear());
    var anoNasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        res.innerHTML = 'Verifique os dados e tente novamente'
        res.style.background = 'yellow'
    } else {
        res.style.background = 'white'
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - anoNasc.value;
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = fsex[0].checked ? 'Homem' : 'Mulher'
        if (genero == 'Homem') {
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe-masc.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-masc.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-masc.jpg')
            } else {
                //coroa
                img.setAttribute('src', 'img/idoso-masc.jpg')
            }
        } else {
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe-fem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-fem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-fem.jpg')
            } else {
                //coroa
                img.setAttribute('src', 'img/idoso-fem.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = ` <p>Detectamos ${genero} com ${idade} ano(s).</p>`
        res.appendChild(img)
    }

}
