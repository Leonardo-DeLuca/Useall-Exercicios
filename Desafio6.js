//Classe fila
class Fila {
    constructor() {
        this.fila = []
    }

    adicionar(nome) {
        this.fila.push(nome)
    }

    remover() {
        this.fila.shift()
    }
    imprimir() {
        console.log(this.fila)
    }
}

let filaNomes = new Fila;
filaNomes.adicionar('Nome 1')
filaNomes.adicionar('Nome 2')
filaNomes.adicionar('Nome 3')
filaNomes.imprimir()
filaNomes.remover()
filaNomes.adicionar('Nome 4')
filaNomes.imprimir()
filaNomes.remover()
filaNomes.remover()
filaNomes.imprimir()

