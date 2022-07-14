function verificar() {
    // Verifica o ano atual
    var data = new Date()
    var ano = data.getFullYear()

    var txtano = document.querySelector('#txtano')
    var fano = Number(txtano.value)
    var res = document.querySelector('#res')
    
    if (fano == 0 || fano > ano) {
        alert('[ERRO] Verifique os dados')
    }else{
        var fsexo = document.getElementsByName('radsexo')
        var idade = ano - fano
        var genero = ''
        var img = document.querySelector('#imagem')

        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                img.src = 'imagens/homem-bebe.png'
            } else if(idade <= 12){
                img.src = 'imagens/homem-crianca.png'
            } else if(idade <= 30){
                img.src = 'imagens/homem-jovem.png'
            } else if(idade <= 55){
                img.src = 'imagens/homem-adulto.png'
            } else if(idade <= 150){
                img.src = 'imagens/homem-idoso.png'
            } 
           
        } else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                img.src = 'imagens/mulher-bebe.png'
            }else if(idade <= 12){
                img.src = 'imagens/mulher-crianca.png'
            } else if(idade <= 30){
                img.src = 'imagens/mulher-jovem.png'
            } else if(idade <= 55){
                img.src = 'imagens/mulher-adulta.png'
            } else if(idade <= 150){
                img.src = 'imagens/mulher-idosa.png'
            } 
        } 

       
    }

    res.innerHTML = `${genero} com ${idade} anos`

/*
    var img = document.querySelector('#imagem')

    if(genero == "Mulher" && idade <= 5){
        img.src = 'imagens/mulher-bebe.png'
    } else if(genero == "Mulher" && idade <= 12){
        img.src = 'imagens/mulher-crianca.png'
    } else if(genero == "Mulher" && idade <= 30){
        img.src = 'imagens/mulher-jovem.png'
    } else if(genero == "Mulher" && idade <= 55){
        img.src = 'imagens/mulher-adulta.png'
    } else if(genero == "Mulher" && idade <= 150){
        img.src = 'imagens/mulher-idosa.png'
    }

    if(genero == "Homem" && idade <= 5){
        img.src = 'imagens/homem-bebe.png'
    } else if(genero == "Homem" && idade <= 12){
        img.src = 'imagens/homem-crianca.png'
    } else if(genero == "Homem" && idade <= 30){
        img.src = 'imagens/homem-jovem.png'
    } else if(genero == "Homem" && idade <= 55){
        img.src = 'imagens/homem-adulto.png'
    } else if(genero == "Homem" && idade <= 150){
        img.src = 'imagens/homem-idoso.png'
    }
*/
        

}







