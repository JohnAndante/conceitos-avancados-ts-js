# Facade

## O que é?

Facade é um **structural pattern** que fornece uma interface unificada para um conjunto de interfaces em um subsistema. Ele define uma interface de nível mais alto que facilita o uso do subsistema, ocultando a complexidade de suas classes internas.

Um bom exemplo de uso do padrão Facade é em bibliotecas de terceiros, como o Prisma Client. Ao fornecer uma interface unificada para interagir com o banco de dados, o padrão Facade ajuda a simplificar o código do cliente e a ocultar a complexidade de como as operações no banco de dados são realizadas.

## Problema

Imagine que vocẽ possua um subsistema complexo, onde existem várias classes e métodos para realizar diferentes operações, várias delas não dependem uma das outras. Se você precisar interagir com esse subsistema, terá que lidar com a complexidade de cada uma dessas classes e métodos, o que pode tornar o código difícil de entender e manter.

A solução para esse problema é criar uma interface unificada que encapsule a complexidade do subsistema e forneça um ponto de acesso simples para interagir com ele. É exatamente isso que o padrão Facade faz.

## Como funciona?

O padrão Facade geralmente envolve os seguintes passos:

1. **Interface Unificada**: Uma interface unificada é criada para o subsistema, fornecendo um ponto de acesso simples para interagir com ele.

2. **Classe Facade**: Uma classe Facade é criada para implementar a interface unificada e delegar as chamadas aos métodos do subsistema.

```typescript
interface Subsystem {
  operation(): void;
}

class SubsystemA {
  public operation(): void {
    console.log('Subsystem A: Operation A');
  }
}

class SubsystemB {
  public operation(): void {
    console.log('Subsystem B: Operation B');
  }
}

class Subsystem...

class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  ...

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    ...
  }

  public operation(): void {
    this.subsystemA.operation();
    this.subsystemB.operation();
    ...
  }
}
```

## Quando utilizar?

Em situações como:

- **Integração com bibliotecas de terceiros**
  Utilizado para fornecer uma interface unificada para interagir com bibliotecas de terceiros, ocultando a complexidade de suas classes internas.

- **Sistemas complexos**
  Utilizado para simplificar a interação com subsistemas complexos, fornecendo um ponto de acesso simples para realizar operações.

- **APIs**
  Utilizado para fornecer uma interface unificada para interagir com APIs, ocultando a complexidade de como as operações são realizadas.

## Vantagens e Desvantagens

### Vantagens

- Simplifica a interação com subsistemas complexos.
- Fornece um ponto de acesso simples para realizar operações.
- Isola e modulariza a complexidade do subsistema, facilitando a manutenção e a evolução do código.

### Desvantagens

- Pode adicionar uma camada adicional de abstração ao código, tornando-o mais difícil de entender.
- Caso a lógica fique muito complexa, a classe Facade pode encapsular código excessivo, tornando-a menos legível.
