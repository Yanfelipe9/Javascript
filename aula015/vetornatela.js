let valores = [8,2,3,5,7,4,6,8,9]

// for(var pos = 0 ; pos < valores.length ; pos++){
//     console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
// }

for(var pos in valores.sort()){
    console.log(valores[pos])
}

var num = 7

let posi = valores.indexOf(num)

if(posi == -1){
    console.log(`Não foi encontrado o valor ${num}`)
} else {
   console.log(`O valor ${num} está na posição ${posi}`) 
}

