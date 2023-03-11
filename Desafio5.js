//Classe Pilha
class Pilha{
    constructor(){
        this.pilha = []
    }

    adicionar(nome){
        this.pilha.push(nome)
    }

    remover(){
        this.pilha.pop()
    }
    imprimir(){
        console.log(this.pilha)
    }
}

let pilhaNomes = new Pilha;
pilhaNomes.adicionar('Nome 1')
pilhaNomes.adicionar('Nome 2')
pilhaNomes.adicionar('Nome 3')
pilhaNomes.imprimir()
pilhaNomes.remover()
pilhaNomes.adicionar('Nome 4')
pilhaNomes.imprimir()
pilhaNomes.remover()
pilhaNomes.remover()
pilhaNomes.imprimir()

