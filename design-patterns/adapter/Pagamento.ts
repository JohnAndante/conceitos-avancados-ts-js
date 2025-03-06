interface Pagamento {
    processarPagamento(valor: number): void;
}

// Serviço antigo (compatível)
class PagamentoAntigo implements Pagamento {
    processarPagamento(valor: number): void {
        console.log(`Pagamento de R$${valor} processado pelo sistema antigo`);
    }
}

// Novo serviço com uma interface diferente
class NovoPagamento {
    realizarPagamento(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado pelo novo sistema`);
    }
}

// Adapter para conectar o novo serviço ao sistema antigo
class PagamentoAdapter implements Pagamento {
    private novoPagamento: NovoPagamento;

    constructor(novoPagamento: NovoPagamento) {
        this.novoPagamento = novoPagamento;
    }

    processarPagamento(valor: number): void {
        console.log("Adaptando chamada para o novo sistema...");
        this.novoPagamento.realizarPagamento(valor);
    }
}

console.log("=== Sistema Antigo ===");
const pagamentoAntigo = new PagamentoAntigo();
pagamentoAntigo.processarPagamento(100);

console.log("\n=== Sistema com Adapter ===");
const novoPagamento = new NovoPagamento();
const pagamentoAdaptado = new PagamentoAdapter(novoPagamento);
pagamentoAdaptado.processarPagamento(200);
