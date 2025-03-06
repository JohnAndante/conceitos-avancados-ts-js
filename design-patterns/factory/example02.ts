import { VeiculoFactory } from "./veiculo";

const carro = VeiculoFactory.criarVeiculo("carro");
const moto = VeiculoFactory.criarVeiculo("moto");

console.log('\nCarro:', carro.tipo);
console.log('Quantidade de rodas:', carro.rodas);

console.log('\nMoto:', moto.tipo);
console.log('Quantidade de rodas:', moto.rodas);



