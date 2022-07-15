 //Multiplicação com while
 
 var n = Number('2')
 var a = Number('1')

 while(a<11){
     var mult = n*a
     console.log(`${n}x${a}=${mult}`)
     a++
    
 }

//Multiplicação com dowhile

var x = Number(2)
var i = Number(1)

do{
    var mult = n*i
    console.log(`${x}x${i}=${mult}`)
    i++
}while(i<11)



// Multiplicação de numero iguais
var c = 1
var f = 20

while(c<=f){
    var d = c**2
  console.log(`${c}x${c} = ${d} `)
  c++ 
}