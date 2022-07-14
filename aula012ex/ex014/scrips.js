function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var texto = document.querySelector('#texto')

    // função para saber as horas
    var agoraHora = new Date()
    var hora = agoraHora.getHours()
    
    // var hora = 10

    // função para saber os minutos
    var agoraMinuto = new Date()
    var minuto = agoraMinuto.getMinutes()

    // if para aparecer o 0 dos minutos entre 0 e 9
    if(minuto>= 0 && minuto <10){
        var minuto0 = '0'
    }else{
        var minuto0 = ''
    }

    msg.innerHTML = `Agora são <strong>${hora}:${minuto0}${minuto} </strong>`

    var foto = document.querySelector('#foto')

    if(hora >=0 && hora < 12){
        document.body.style.background = '#b4a329' 
        img.src = 'imagens/fotomanha.png'
    }else if (hora >= 12 && hora < 18){
        document.body.style.background = '#fa5b05'
        img.src = 'imagens/fototarde.png'
    }else{
        document.body.style.background = '#005484'
        img.src = 'imagens/fotonoite.png'
}
}





