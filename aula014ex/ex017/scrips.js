
function contar(){
    var inicioTxt = document.querySelector('#inicio')
    inicio = Number(inicioTxt.value)
    
    var fimTxt = document.querySelector('#fim')
    fim = Number(fimTxt.value)

    var fimTxt = document.querySelector('#fim')
    fim = Number(fimTxt.value)

    var res = document.querySelector('#res')

    for(inicio ; inicio <= fim ; inicio++){
        res.innerHTML = inicio
    }

}

