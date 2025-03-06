import { Configuracao } from "./configuracao";

const configuracao1 = new Configuracao();
const configuracao2 = new Configuracao();

console.log('\n>> Definindo chave1 na configuracao1 -> valor1');

configuracao1.definir("chave1", "valor1");

console.log("configuracao1 -> ", configuracao1.obter("chave1"));
console.log("configuracao2 -> ", configuracao2.obter("chave1"));

console.log("\n>> Alterando valor da chave1 na configuracao2 -> valor2");

configuracao2.definir("chave1", "valor2");

console.log("configuracao1 -> ", configuracao1.obter("chave1"));
console.log("configuracao2 -> ", configuracao2.obter("chave1"));
