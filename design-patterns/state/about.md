# State

## O que é?

State é um **behavioral pattern** que permite que um objeto altere seu comportamento quando seu estado interno muda. Isso é alcançado através da implementação de diferentes classes que representam os diferentes estados possíveis do objeto.

O padrão State é útil quando um objeto pode ter vários comportamentos diferentes, dependendo de seu estado interno. Em vez de usar várias instruções condicionais para determinar o comportamento do objeto, o padrão State permite que o objeto delegue o comportamento para um objeto de estado.

## Problema

Imagine que você tenha uma classe que representa um objeto com vários comportamentos diferentes, dependendo de seu estado interno. Por exemplo, um objeto que pode estar em um estado "ligado" ou "desligado", e que deve se comportar de maneira diferente em cada estado.

Uma abordagem comum para resolver esse problema seria usar várias instruções condicionais para determinar o comportamento do objeto com base em seu estado interno. No entanto, essa abordagem pode levar a um código complexo e difícil de manter, especialmente se houver muitos estados e comportamentos diferentes.

O padrão State resolve esse problema encapsulando o comportamento associado a cada estado em um objeto de estado separado. Isso permite que o objeto delegue o comportamento para o objeto apropriado de acordo com seu estado interno, tornando o código mais modular e fácil de manter.

## Como funciona?

O padrão State geralmente envolve os seguintes elementos:

- **Context**: É a classe que contém o estado atual do objeto e é responsável por delegar as chamadas de métodos para o estado atual.

- **State**: É a interface que define os métodos que representam os diferentes estados possíveis do objeto.

- **ConcreteState**: São as classes que implementam a interface State e representam os diferentes estados possíveis do objeto.

```typescript
interface State {
  handle(): void;
}

class ConcreteStateA implements State {
  handle() {
    console.log('ConcreteStateA');
  }
}

class ConcreteStateB implements State {
  handle() {
    console.log('ConcreteStateB');
  }
}

class Context {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public setState(state: State) {
    this.state = state;
  }

  public request() {
    this.state.handle();
  }
}
```

## Quando utilizar?

Em situações como:

- **Máquinas de estados**
  Utilizado para representar o comportamento de um objeto que pode estar em diferentes estados, como uma máquina de venda automática que pode estar em um estado "esperando moeda", "vendendo produto" ou "sem produto".

- **Diferentes comportamentos**
  Utilizado quando um objeto pode ter diferentes comportamentos, dependendo de seu estado interno, como um objeto que pode estar em um estado "ligado" ou "desligado".

- **Excesso de condicionais**
  Utilizado quando existem muitas regras condicionais dentro da lógica para determinar o comportamento de um objeto, tornando o código complexo e difícil de manter.

## Vantagens e Desvantagens

### Vantagens

- Organização de comportamentos de estado em classes separadas, facilitando a manutenção e extensão do código.
- Redução de condicionais no código, tornando-o mais limpo e legível.
- Simplificação do código do contexto, que não precisa mais conter lógica condicional para determinar o comportamento do objeto.
- Fluxo de controle mais claro, pois cada estado é representado por uma classe separada.

### Desvantagens

- Aumento do número de classes no código, o que pode torná-lo mais complexo.
- Pode ser difícil de implementar se o número de estados e transições for muito grande.
- Pode ser excessivo para situações simples em que o objeto tem apenas alguns estados e comportamentos.
