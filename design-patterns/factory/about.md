# Factory

## O que é?

Factory pattern é um padrão que define uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. É útil quando uma classe não pode antecipar a classe de objetos que ela deve criar, ou quando deseja delegar a responsabilidade de criação de objetos para subclasses.

Um exemplo simples de uso do padrão Factory é a criação de objetos de diferentes formas geométricas, como círculos, quadrados e triângulos. A classe `ShapeFactory` pode ter um método `createShape` que aceita um parâmetro indicando o tipo de forma a ser criada, e retorna uma instância da forma correspondente.

```typescript

interface Shape {
  draw(): void;
}

class Circle implements Shape {

  draw() {
    console.log('Desenhando um círculo');
  }
}

class Square implements Shape {
  draw() {
    console.log('Desenhando um quadrado');
  }
}

class Triangle implements Shape {
  draw() {
    console.log('Desenhando um triângulo');
  }
}

class ShapeFactory {
  public createShape(type: string): Shape {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'square':
        return new Square();
      case 'triangle':
        return new Triangle();
      default:
        throw new Error('Forma inválida');
    }
  }
}
```

## Como funciona?

A idéia principal do **Factory** é usar um método ou classe para instanciar objetos com base em certas condições ou parâmetros, sem expor diretamente o processo de criação.

## Exemplos

```typescript
interface Veiculo {
  tipo: string;
  ligar(): void;
}

class Carro implements Veiculo {
  tipo = "Carro";
  ligar() {
    console.log("Ligando o carro...");
  }
}

class Moto implements Veiculo {
  tipo = "Moto";
  ligar() {
    console.log("Ligando a moto...");
  }
}

class VeiculoFactory {
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

// Execução
const veiculo1 = VeiculoFactory.criarVeiculo("carro");
veiculo1.ligar(); // Saída: Ligando o carro...

const veiculo2 = VeiculoFactory.criarVeiculo("moto");
veiculo2.ligar(); // Saída: Ligando a moto...
```

## Quando utilizar?

- Quando o código precisar criar objetos complexos semelhantes, mas com pequenas diferenças - como diferentes tipos de formas geométricas.

- Quando o código precisar "esconder" a lógica de criação de objetos de outras partes do código.

- Quando existe a necessidade de criar "famílias" de objetos relacionados, como diferentes tipos de veículos.

## Quando não utilizar?

- Quando a lógica de criação de objetos é simples e não precisa ser encapsulada.

- Quando não há variações na criação de objetos.
