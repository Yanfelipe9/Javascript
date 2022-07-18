function tabuada(){
    var numero = document.querySelector('#numero')
    var res = document.querySelector('#res')

    if(numero.value.length == 0){
        alert('Digite um numero')
    } else {
        var n = Number(numero.value)
        res.innerHTML = ''
        for(var c = 1 ; c <= 10 ; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
    
}