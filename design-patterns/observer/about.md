# Observer

## O que é?

Observer é um **behavioral pattern** que define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

Um exemplo clássico de uso do padrão Observer é em aplicações de chat, onde várias pessoas estão conversando em uma sala. Quando alguém envia uma mensagem, todos os outros participantes da sala são notificados e veem a mensagem em tempo real.

## Problema

Imagine que você tenha um objeto que precisa notificar outros objetos sobre mudanças em seu estado, como por exemplo um aplicativo de clima que precisa notificar vários widgets sobre mudanças na temperatura. Se você acoplar diretamente a lógica de notificação ao objeto, isso pode levar a um código complexo e difícil de manter.

A solução para esse problema é desacoplar a lógica de notificação do objeto e permitir que outros objetos se inscrevam para receber notificações. É dessa forma que o padrão Observer funciona.

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

Em situações como:

- **Conexões em tempo real**
  Utilizado para notificar vários clientes sobre mudanças em um objeto em tempo real, como em aplicações de chat, sistemas de monitoramento, ou disparo de eventos.

- **Eventos condicionais**
  Quando você deseja notificar vários objetos sobre mudanças em um objeto, mas apenas se determinadas condições forem atendidas.

## Vantagens e Desvantagens

### Vantagens

- Desacopla o objeto que emite notificações dos objetos que as recebem.
- Permite que novos observadores sejam adicionados, com suas lógicas individuais, sem modificar o objeto que emite notificações.
- Permite que os observadores sejam notificados de mudanças em tempo real.

### Desvantagens

- Pode levar a problemas de desempenho se houver muitos observadores registrados.
- Os observadores são notificados em ordem aleatória, o que pode levar a comportamentos inesperados se a ordem for importante.
- Pode ser difícil garantir que os observadores sejam notificados apenas uma vez, especialmente em ambientes multithread.
