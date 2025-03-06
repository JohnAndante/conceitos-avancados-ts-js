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
