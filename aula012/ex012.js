var agoraHora = new Date()
var agoraMinuto = new Date()

var hora = agoraHora.getHours()
var minuto = agoraMinuto.getMinutes() 

console.log(`Agora são exatamente ${hora}:${minuto} `)

if(hora <= 12 ){
    console.log('Bom dia')

}else if(hora > 12 && hora <= 17){
    console.log('Boa tarde')

}else if(hora <= 24){
    console.log('Boa noite')

}else if(hora >24){
    console.log('Só valem valores entre 0 e 24')
}