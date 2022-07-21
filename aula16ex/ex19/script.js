var fnum = document.querySelector('#fnum')
var flista = document.querySelector('#flista')
var res = document.querySelector('#res')
var valores = []
var soma = 0

function faixaNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function listaNumero(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
// AO APERTAR O ENTER ELE EXECULTA A FUNÇÃO ADICIONAR
function handle(e){
    if(e.keyCode == 13){
        adicionar()
    }
}
function adicionar(){
    // SE O VALOR FOR REALMENTE UM NUMERO E NÃO ESTIVER NA LISTA
    if(faixaNumero(fnum.value) && !listaNumero(fnum.value,valores)){
        valores.push(Number(fnum.value))
        var item = document.createElement('option')
        item.text = `O valor é ${fnum.value}`
        flista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor inválido ou já inserido')   
    } 
    fnum.value = ''
    fnum.focus()
}

function finalizar(){
    
    if (valores.length == 0){

        alert('Adicione valores na lista')

    } else {
        
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo temos ${valores.length} número cadastrados</p> `
    
        for(var i in valores){
            soma += valores[i]
        }

        res.innerHTML += `<p>O maior número informado foi ${Math.max.apply(Math,valores)}</p>`
        res.innerHTML += `<p>O menor numero informado foi ${Math.min.apply(Math,valores)}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${((soma)/(valores.length)).toFixed(2)}</p>`
}


}

