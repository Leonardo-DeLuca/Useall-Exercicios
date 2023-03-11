//Calculo IMC
function CalculaIMC(altura, peso){
    altura /= 100
    let imc = peso / (Math.pow(altura, 2))
    let classificacao = ''

    if(imc <= 18.4){
        classificacao = ' Abaixo do peso'
    } else if(imc >= 18.5 && imc <= 24.9){
        classificacao = ' Normal'
    } else if(imc >= 25.1 && imc <= 29.9){
        classificacao = ' Acima do peso'
    } else{
        classificacao = ' Obeso'
    }
    
    return imc + classificacao
}

//Altura em centímetros
console.log(CalculaIMC(172, 80))