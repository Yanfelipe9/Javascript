function contar (){
    var inicio = document.querySelector('#iniciotxt').value
    var fim = document.querySelector('#fimtxt').value
    var passo = document.querySelector('#passotxt').value
    var res = document.querySelector('#res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Verifique se todos os dados estão preenchidos...'
    } else {
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        res.innerHTML = 'Contando: '

        if(p <= 0){
            alert('Valor de passo inválido! Considerando passo = 1')
            p = 1
        }

        if(i<f){
            for(var c = i ; c <= f ; c += p)
            res.innerHTML += ` ${c} \u{27A1}`
        } else {
            for(var c = i ; c >= f ; c -= p)
            res.innerHTML += `${c} \u{27A1}`
        }

    } 
}

