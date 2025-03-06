interface Shape {
  draw(): void;
  getArea(): number;
}

class Circle implements Shape {
  private radius: number = 0;

  constructor(radius: number) {
    this.radius = radius;
  }

  draw() {
    console.log('\n\n- Desenhando um círculo -\n');

    for (let i = 0; i < this.radius * 2; i++) {
      let line = '';
      for (let j = 0; j < this.radius * 2; j++) {
        const distance = Math.sqrt((i - this.radius) ** 2 + (j - this.radius) ** 2);
        if (distance < this.radius) {
          line += '*';
        } else {
          line += ' ';
        }
      }
      console.log(line);
    }
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square implements Shape {
  private sideSize: number = 0;

  constructor(sideSize: number) {
    this.sideSize = sideSize;
  }

  draw() {
    console.log('\n\n- Desenhando um quadrado -\n');

    for (let i = 0; i < this.sideSize; i++) {
      let line = '';
      for (let j = 0; j < this.sideSize; j++) {
        line += '*';
      }
      console.log(line);
    }
  }

  getArea() {
    return this.sideSize ** 2;
  }
}

class Triangle implements Shape {

  private base: number = 0;
  private height: number = 0;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  draw() {
    console.log('\n\n- Desenhando um triângulo -\n');


    for (let i = 0; i < this.height; i++) {
      const asterisks = (i + 1) * 2 - 1;
      const padding = Math.floor((this.base - asterisks) / 2);

      const line =
        ''.padStart(padding, ' ') +
        ''.padStart(asterisks, '*') +
        ''.padStart(this.base - padding - asterisks, ' ');

      console.log(line);
    }

  }

  getArea() {
    return (this.base * this.height) / 2;
  }

}

export class ShapeFactory {
  public createShape(type: string, options: any): Shape {
    switch (type) {
      case 'circle':
        return new Circle(options.radius);
      case 'square':
        return new Square(options.sideSize);
      case 'triangle':
        return new Triangle(options.base, options.height);
      default:
        throw new Error('Forma inválida');
    }
  }
}

const factory = new ShapeFactory();

const circle = factory.createShape('circle', { radius: 5 });
const square = factory.createShape('square', { sideSize: 5 });
const triangle = factory.createShape('triangle', { base: 10, height: 5 });

circle.draw();
console.log("\nÁrea do círculo", circle.getArea());

square.draw();
console.log("\nÁrea do quadrado", square.getArea());

triangle.draw();
console.log("\nÁrea do triângulo", triangle.getArea());
