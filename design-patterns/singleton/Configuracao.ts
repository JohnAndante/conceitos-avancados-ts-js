export interface Configuracoes {
    [key: string]: string;
}

export class Configuracao {
    private static instancia: Configuracao;
    private configuracoes: Configuracoes = {};

    constructor() {
        if (Configuracao.instancia) {
            return Configuracao.instancia;
        }

        this.configuracoes = {};
        Configuracao.instancia = this;
    }

    definir(chave: string, valor: string): void {
        this.configuracoes[chave] = valor;
    }

    obter(chave: string): string | undefined {
        return this.configuracoes[chave];
    }
}

const configuracao1 = new Configuracao();
const configuracao2 = new Configuracao();

console.log('\n>> Definindo chave1 na configuracao1 -> valor1');

configuracao1.definir("chave1", "valor1");

console.log("configuracao1 -> ", configuracao1.obter("chave1"));
console.log("configuracao2 -> ", configuracao2.obter("chave1"));

console.log("\n>> Alterando valor da chave1 na configuracao2 -> valor2");

configuracao2.definir("chave1", "valor2");

console.log("configuracao1 -> ", configuracao1.obter("chave1"));
console.log("configuracao2 -> ", configuracao2.obter("chave1"));
