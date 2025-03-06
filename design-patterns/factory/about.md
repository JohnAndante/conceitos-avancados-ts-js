# Factory

## O que é?

Factory pattern é um **creational pattern** que define uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. É útil quando uma classe não pode antecipar a classe de objetos que ela deve criar, ou quando deseja delegar a responsabilidade de criação de objetos para subclasses.

Um exemplo simples de uso do padrão Factory é a criação de objetos de diferentes formas geométricas, como círculos, quadrados e triângulos. A classe `ShapeFactory` pode ter um método `createShape` que aceita um parâmetro indicando o tipo de forma a ser criada, e retorna uma instância da forma correspondente.

## Problema

Imagine que você possua uma classe que precisa criar objetos de diferentes tipos, mas não sabe antecipadamente qual tipo de objeto será necessário. Se a lógica de criação de objetos for implementada diretamente na classe, ela precisará ser alterada toda vez que um novo tipo de objeto for adicionado, adicionando condições `if` ou `switch` para cada tipo de objeto, complicando o código.

A solução para esse problema é usar o padrão Factory, que encapsula a lógica de criação de objetos em uma classe separada, permitindo que a classe principal crie objetos sem precisar saber como eles são criados.

## Como funciona?

O padrão Factory geralmente envolve os seguintes passos:

1. **Interface**: Uma interface ou classe abstrata é criada para definir a interface para a criação de objetos.

2. **Implementações**: Implementações concretas da interface são criadas para criar objetos concretos.

3. **Factory**: Uma classe Factory é criada para fornecer um método de criação de objetos. Este método aceita um parâmetro que indica o tipo de objeto a ser criado e retorna uma instância do objeto correspondente.

```typescript
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Desenhando um círculo...");
  }
}

class Square implements Shape {
  draw() {
    console.log("Desenhando um quadrado...");
  }
}

class Triangle implements Shape {
  draw() {
    console.log("Desenhando um triângulo...");
  }
}

class ShapeFactory {
  static createShape(type: string): Shape {
    switch (type) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      case "triangle":
        return new Triangle();
      default:
        throw new Error("Tipo de forma não suportado");
    }
  }
}

```

## Quando utilizar?

Em situações como:

- **Criação de objetos complexos**: Quando o código precisa criar objetos complexos semelhantes, mas com pequenas diferenças, como diferentes tipos de formas geométricas.

- **Encapsulamento da lógica de criação**: Quando o código precisa "esconder" a lógica de criação de objetos de outras partes do código.

- **Criação de "famílias" de objetos**: Quando existe a necessidade de criar "famílias" de objetos relacionados, como diferentes tipos de veículos.

## Vantagens e Desvantagens

### Vantagens

- Evita a lógica fortemente acoplada de criação de objetos em uma classe.
- Permite adicionar novos tipos de objetos sem modificar o código existente.
- Encapsula a lógica de criação de objetos em uma classe separada.

### Desvantagens

- Pode adicionar complexidade ao código, especialmente se houver muitos tipos de objetos a serem criados.
