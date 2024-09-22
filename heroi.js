class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo === "monge") {
            ataque = "artes marciais"
        }
        else if (this.tipo === "ninja") {
            ataque = "shuriken"
        }
        else {
            ataque = "fez um ataque comum"
        }
        this.escrever(ataque)
    }

    escrever(ataque) {
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }     
}

let atacantePrimeiro = new heroi("Galdalf", 150, "mago");
let atacanteSegundo = new heroi("Barbaro", 150, "guerreiro");
let atacanteTerceiro = new heroi("Sr Miyagi", 150, "monge");
let atacanteQuarto = new heroi("Rafael", 150, "ninja");


atacantePrimeiro.atacar()
atacanteSegundo.atacar()
atacanteTerceiro.atacar()
atacanteQuarto.atacar()
