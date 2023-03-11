//Retornar index de um valor em um array
debugger
function retornarIndex(array, valor){
    let posicoes = []
    if(array.includes(valor)){
        
        for(let i = 0; i < array.length; i++){
            if(array[i] == valor){
                posicoes.push(i)
            }
        }       
        return posicoes
    } else{
        return 'Valor não encontrado'
    }
}

let arrayInteiros = [1, 2, 5, 10, 2, 20, 20, 32, 14, 20, 7, 1, 98]

console.log(retornarIndex(arrayInteiros, 20))