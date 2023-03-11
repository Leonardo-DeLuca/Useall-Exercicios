//Escrever número por Extenso
let numeroRecebido

function numeroPorExtenso(numeroRecebido) {

    if (numeroRecebido < 0 || numeroRecebido > 9999) {
        console.log('Numero Inválido')
        return
    }

    let numSplit = numeroRecebido.toString().split('');

    let primeiroNum = numSplit[0]
    let segundoNum = numSplit[1]
    let terceiroNum = numSplit[2]
    let quartoNum = numSplit[3]

    const num10A19 = ['dez', 'onze', 'doze', 'treze', 'quatorse', 'quinze', 'desesseis', 'desessete', 'dezoito', 'dezenove']
    const unidade = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
    const dezena = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
    const centena = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
    const milhares = ['', 'mil', 'dois mil', 'três mil', 'quatro mil', 'cinco mil', 'seis mil', 'sete mil', 'oito mil', 'nove mil']

    //Tratamento de resposta de acordo com o tamanho do numero (.length)
    //Um digito
    if (numSplit.length == 1) {
        console.log(unidade[primeiroNum])
    } else if (numSplit.length == 2) { //Dois digitos
        if (numeroRecebido < 20) {
            console.log(num10A19[segundoNum])
        } else if (segundoNum == 0) {
            console.log(dezena[primeiroNum])
        } else {
            console.log(dezena[primeiroNum] + ' e ' + unidade[segundoNum])
        }
    } else if (numSplit.length === 3) { //Três digitos
        if (segundoNum == 0 && terceiroNum == 0) {
            if (primeiroNum == 1) {
                centena[1] = 'cem'
            }
            console.log(centena[primeiroNum])
        } else if (segundoNum == 0) {
            console.log(centena[primeiroNum] + ' e ' + unidade[terceiroNum])
        } else if (terceiroNum == 0) {
            console.log(centena[primeiroNum] + ' e ' + dezena[segundoNum])
        } else {
            console.log(centena[primeiroNum] + ' e ' + dezena[segundoNum] + ' e ' + unidade[terceiroNum])
        }
    } else { //Quatro Digitos
        if (segundoNum == 0 && terceiroNum == 0 && quartoNum == 0) {
            console.log(milhares[primeiroNum])
        } else if (segundoNum == 0) {
            console.log(milhares[primeiroNum] + ' e ' + dezena[terceiroNum] + ' e ' + unidade[quartoNum])
        } else if (terceiroNum == 0) {
            console.log(milhares[primeiroNum] + ' ' + centena[segundoNum] + ' e ' + unidade[quartoNum])
        } else if (quartoNum == 0) {
            console.log(milhares[primeiroNum] + ' ' + centena[segundoNum] + ' e ' + dezena[terceiroNum])
        } else {
            console.log(milhares[primeiroNum] + ' ' + centena[segundoNum] + ' e ' + dezena[terceiroNum] + ' e ' + unidade[quartoNum])
        }

    }
}

numeroPorExtenso(0)
numeroPorExtenso(1)
numeroPorExtenso(5)
numeroPorExtenso(6)
numeroPorExtenso(7)
numeroPorExtenso(10)
numeroPorExtenso(11)
numeroPorExtenso(12)
numeroPorExtenso(16)
numeroPorExtenso(17)
numeroPorExtenso(19)
numeroPorExtenso(20)
numeroPorExtenso(30)
numeroPorExtenso(70)
numeroPorExtenso(90)
numeroPorExtenso(35)
numeroPorExtenso(29)
numeroPorExtenso(99)
numeroPorExtenso(73)
numeroPorExtenso(100)
numeroPorExtenso(500)
numeroPorExtenso(900)
numeroPorExtenso(702)
numeroPorExtenso(306)
numeroPorExtenso(620)
numeroPorExtenso(860)
numeroPorExtenso(138)
numeroPorExtenso(961)
numeroPorExtenso(1000)
numeroPorExtenso(7000)
numeroPorExtenso(2054)
numeroPorExtenso(9038)
numeroPorExtenso(3208)
numeroPorExtenso(6501)
numeroPorExtenso(4250)
numeroPorExtenso(7820)
numeroPorExtenso(1234)
numeroPorExtenso(9999)


numeroPorExtenso(-1)
numeroPorExtenso(10000)