function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()    
    //hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12 ){
        //bom dia
        img.src = 'img/dia.jpg'
        document.body.style.background = '#ffffe6'
    } else if(hora<18){
        document.body.style.background = '#cc8800'
        img.src = 'img/tarde.jpg'
    } else {
        document.body.style.background = '#000033'
        img.src = 'img/noite.jpg'
    }
}


