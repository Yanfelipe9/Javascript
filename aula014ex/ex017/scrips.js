
function contar(){
    let inicio = document.querySelector('#iniciotxt')
    let fim = document.querySelector('#fimtxt')
    let passo = document.querySelector('#passotxt')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERROR] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        for(let c = i; i<f ; c += p){
            res.innerHTML += `${c}`
        }
    }

    

}

