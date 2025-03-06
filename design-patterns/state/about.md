# State

## O que é?

É um padrão de design que permite ao objeto alterar seu comportamento com base na alteração de seu **estado** interno. Isso é feito sem alterar a classe do objeto, permitindo que ele pareça alterar sua classe.

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

## Como funciona?

Um objeto que implementa o State geralmente possui a seguinte estrutura:

- **Context**: É a classe que contém o estado atual do objeto e é responsável por delegar as chamadas de métodos para o estado atual.

- **State**: É a interface que define os métodos que representam os diferentes estados possíveis do objeto.

- **ConcreteState**: São as classes que implementam a interface State e representam os diferentes estados possíveis do objeto.

Em essência, o **Context** delega as chamadas de métodos para o **State** atual, que é responsável por implementar o comportamento associado a esse estado. Quando o estado muda, o **Context** simplesmente altera a referência para o novo **State**.

## Quando utilizar?

- Quando um objeto apresenta mais de um comportamento, dependendo de seu estado interno ou de variáveis de instância
- Quando o comportamento de um objeto depende de seu estado
- Quando existem muitas regras condicionais dentro da lógica para determinar o comportamento de um objeto

## Quando não utilizar?

- Quando o comportamento do objeto não muda com base em seu estado interno
- Quando o objeto não possui muitos estados diferentes, ou quando os estados são simples e não requerem muita lógica para serem implementados
