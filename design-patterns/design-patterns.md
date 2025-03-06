# Design Patterns

## O que são?

**Design Patterns** são soluções reutilizáveis para problemas comuns de design de software. Não apresentam um código pronto, mas sim um modelo ou abordagem para ser customizado e adaptado às necessidades específicas de um projeto ou problemática.

Diferentes de algoritmos, que são soluções step-by-step para problemas computacionais, os padrões de design focam na estrutura e organização do código, promovendo boas práticas de desenvolvimento.

## Benefícios

- **Código mais enxuto e organizado**: Seguindo os padrões disponíveis, a solução tende a ser mais simples e fácil de entender.
- **Facilidade de manutenção**: Com um código mais organizado, a manutenção e evolução do sistema se tornam mais simples.
- **Reutilização de soluções**: Ao invés de reinventar a roda, é possível aplicar soluções já testadas e validadas, ou se basear nelas para resolver problemas semelhantes.

## Designs Patterns mais comuns

- **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.

- **Factory**: Define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar. É um padrão de criação.

- **Observer**: Define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

- **Decorator**: Permite adicionar comportamento ou responsabilidades adicionais a um objeto dinamicamente. É uma alternativa flexível à subclasse.

- **Strategy**: Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. O padrão Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

- **Prototype**: Permite criar novos objetos copiando um objeto existente, conhecido como protótipo. É útil quando a criação de um novo objeto é mais cara do que copiar um existente.

- **Builder**: Separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações.
