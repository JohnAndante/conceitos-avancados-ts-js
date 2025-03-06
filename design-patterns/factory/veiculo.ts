interface Veiculo {
    tipo: string;
    rodas: number;
    ligar(): void;
}

class Carro implements Veiculo {
    tipo = "Carro";
    rodas = 4;
    ligar() {
        console.log("Ligando o carro...");
    }

    getQuantidadeRodas() {
        return this.rodas;
    }
}

class Moto implements Veiculo {
    tipo = "Moto";
    rodas = 2;
    ligar() {
        console.log("Ligando a moto...");
    }

    getQuantidadeRodas() {
        return this.rodas;
    }
}

export class VeiculoFactory {
    static criarVeiculo(tipo: string): Veiculo {
        if (tipo === "carro") {
            return new Carro();
        }
        if (tipo === "moto") {
            return new Moto();
        }
        throw new Error("Tipo de veículo não suportado");
    }
}

