import { ShapeFactory } from "./shapes";

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

