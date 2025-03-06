# Adapter

## O que é?

Adapter é um **structural pattern** que permite que objetos com interfaces incompatíveis trabalhem juntos. Ele atua como um intermediário entre dois objetos, traduzindo chamadas de um objeto para o outro.

Um bom exemplo de uso do padrão Adapter é a conexão de um dispositivo USB a uma porta Thunderbolt em um computador. Como as interfaces dos dispositivos são incompatíveis, um adaptador é necessário para traduzir as chamadas de um dispositivo para o outro.

## Problema

Imagine que você tenha um sistema de pagamentos que utiliza um serviço antigo para processar pagamentos. Agora, você deseja migrar para um novo serviço de pagamentos que possui uma interface diferente, porém não pode modificar o código do sistema antigo. Como você pode conectar o novo serviço ao sistema antigo sem modificar o código existente?

A solução para esse problema é usar o padrão Adapter, que permite que o novo serviço de pagamentos seja adaptado para a interface esperada pelo sistema antigo, sem a necessidade de modificar o código existente.

## Como funciona?

O padrão Adapter geralmente envolve os seguintes passos:

1. **Interface Incompatível**: Duas classes possuem interfaces incompatíveis que precisam trabalhar juntas.

2. **Adapter**: Um adaptador é criado para traduzir as chamadas de uma interface para a outra. O adaptador implementa a interface esperada pelo cliente e contém uma instância da classe que possui a interface incompatível.

3. **Cliente**: O cliente utiliza o adaptador para chamar os métodos da classe com a interface incompatível, sem precisar saber como a tradução é feita.

```typescript
// Interface que define o formato esperado pelo sistema
interface Target {
  request(): string;
}

// Classe Adaptee (a classe que tem uma interface diferente)
class Adaptee {
  specificRequest(): string {
    return "Resposta específica do Adaptee";
  }
}

// Adapter que traduz a interface do Adaptee para a interface Target
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return this.adaptee.specificRequest();
  }
}
```

## Quando utilizar?

Em situações como:

- **Integração de sistemas legados**:
  Utilizado para integrar sistemas legados com novos sistemas, permitindo que eles trabalhem juntos sem a necessidade de modificar o código existente.

- **Reutilização de código**:
  Utilizado para reutilizar classes existentes que possuem interfaces incompatíveis com o restante do sistema, sem a necessidade de modificar o código existente.

- **Conexão de bibliotecas de terceiros**:
  Utilizado para conectar bibliotecas de terceiros com o restante do sistema, permitindo que elas sejam usadas sem a necessidade de modificar o código existente.

- **Adaptação de interfaces**:
  Utilizado para adaptar a interface de um objeto para outra interface esperada pelo cliente, permitindo que objetos incompatíveis trabalhem juntos.

## Vantagens e Desvantagens

### Vantagens

- Permite que objetos com interfaces incompatíveis trabalhem juntos.
- Solução rápida e eficaz para integrar sistemas legados com novos sistemas.
- Ajuda a reutilizar classes existentes sem a necessidade de modificar o código existente.

### Desvantagens

- Pode levar a um aumento da complexidade do código, especialmente se vários adaptadores forem necessários.
- Caso o número de adaptações aumente, pode ser difícil manter o código.
- Por vezes, a melhor iniciativa é refatorar o código para que as interfaces sejam compatíveis.
