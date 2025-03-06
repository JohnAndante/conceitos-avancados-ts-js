# Adapter

## O que é?

O **Adapter** é uma estrutura de design pattern que permite que objetos com interfaces incompatíveis possam trabalhar juntos.

Ele atua como um intermediário entre os objetos, "traduzindo" as chamadas de um objeto para o outro.

```typescript
class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    // Reescreve o método request() para chamar o método specificRequest() do Adaptee
    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
```

## Como funciona?

O **adapter** atua como um tradutor entre duas classes, permitindo que uma interface incompatível seja adaptada para outra.

Ele recebe chamadas de um objeto "cliente" e as converte para o formato esperado pelo outro objeto "serviço".

## Exemplos

```typescript
// Interface esperada pelo sistema atual
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

// Execução
console.log("=== Sistema Antigo ===");
const pagamentoAntigo = new PagamentoAntigo();
pagamentoAntigo.processarPagamento(100);

console.log("\n=== Sistema com Adapter ===");
const novoPagamento = new NovoPagamento();
const pagamentoAdaptado = new PagamentoAdapter(novoPagamento);
pagamentoAdaptado.processarPagamento(200);

```

## Quando utilizar?

- Quando necessário integar sistemas legados com partes novas do sistema.
- Quando for necessário reutilizar classes existentes sem modificar o código atual.
- Quandp duas interfaces forem, de fato, incompartíveis, mas precisam trabalhar juntas.

## Quando não utilizar?

- Quando as classes já forem compatíveis entre si.
- Quando a diferença entre as interfaces forem mínimas e puderem ser resolvidas de outra forma.
- Quando a complexidade do Adapter for maior do que a solução direta do problema.
