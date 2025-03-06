# Observer

## O que é?

Observer é um padrão de design de **comportamento** que permite definir uma "inscrição" de dependências entre objetos, de modo que quando um objeto muda de estado, todos os objetos dependentes são notificados e atualizados automaticamente.

## Como funciona?

O padrão Observer é composto por três elementos principais:

- **Subject**: É o objeto que contém o estado a ser observado. Ele mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores.

- **Observer**: É a interface que define o método `update`, que é chamado pelo Subject quando o estado muda. Os observadores podem ser notificados de várias maneiras, como passando o novo estado como argumento ou permitindo que eles consultem o Subject diretamente.

- **ConcreteObserver**: São as classes que implementam a interface Observer e são registradas no Subject para receber notificações. Quando o Subject muda de estado, ele chama o método `update` de cada observador registrado.

```typescript
interface Observer {
  update(): void;
}

class Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public detach(observer: Observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  public notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class ConcreteObserver implements Observer {
  public update() {
    console.log('ConcreteObserver foi notificado');
  }
}
```

## Quando utilizar?

- Quando você tem uma situação em que um objeto precisa notificar outros objetos sobre mudanças em seu estado
- Quando você deseja desacoplar a lógica de notificação de um objeto da lógica de processamento de outros objetos
- Quando você deseja permitir que vários objetos respondam a mudanças em um objeto sem acoplá-los diretamente a ele

## Quando não utilizar?

- Quando a lógica de notificação é simples e não justifica a introdução de um padrão Observer
- Quando a lógica de notificação é altamente acoplada à lógica de processamento de outros objetos
- Quando a lógica de notificação é altamente variável e difícil de encapsular em uma interface comum
