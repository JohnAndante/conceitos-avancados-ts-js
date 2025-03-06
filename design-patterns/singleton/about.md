# Singleton

## O que é?

Singleton é um **creational pattern** que garante que uma classe tenha apenas uma instância, fornecendo um ponto de acesso global a ela. É extremamente útil quando é necessário limitar o número de instâncias de uma classe a um único objeto.

Um exemplo clássico de uso do padrão Singleton é em classes que gerenciam conexões a bancos de dados, como o Prisma Client. Ao garantir que apenas uma instância do cliente Prisma seja criada, o padrão ajuda a evitar problemas de concorrência e garante que todas as operações no banco de dados sejam realizadas através da mesma instância.

## Problema

Imagine que você tenha uma classe que representa uma configuração de aplicação e queira garantir que apenas uma instância dessa classe seja criada. Se várias instâncias forem criadas, cada uma delas poderá ter valores diferentes, o que pode levar a comportamentos inesperados na aplicação.

A solução para esse problema é garantir que apenas uma instância da classe seja criada e que todas as outras partes da aplicação acessem essa mesma instância. É exatamente isso que o padrão Singleton faz.

## Como funciona?

O padrão Singleton geralmente envolve os seguintes passos:

1. **Construtor Privado**: O construtor da classe é declarado como privado, impedindo que outras classes criem instâncias dela diretamente.

2. **Método Estático**: Um método estático é criado para fornecer acesso à instância única da classe. Esse método verifica se a instância já foi criada e, caso contrário, cria uma nova instância.

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
```

## Quando utilizar?

Em situações como:

- **Conexões com o banco de dados**
  Utilizado para garantir que apenas uma instância do cliente de banco de dados seja criada, evitando problemas de concorrência.

- **Serviços de log**
  Utilizado para garantir que todas as mensagens de log sejam enviadas para o mesmo serviço, evitando duplicação de mensagens.

- **Cache de configurações**
  Utilizado para garantir que as configurações sejam carregadas uma única vez e reutilizadas em toda a aplicação, alterando e reutilizando em apenas um local.

- **Filas de mensagens**
  Utilizado para garantir que todas as mensagens sejam processadas por uma única instância, evitando duplicação de mensagens e respeitando a ordem de processamento.

## Vantagens e Desvantagens

### Vantagens

- Garante que apenas uma instância da classe seja criada.
- Fornece um ponto de acesso global à instância da classe.
- O objeto só é inicializado quando é requisitado pela primeira vez, economizando recursos.

### Desvantagens

- Pode mascarar uma classe que está fazendo muito trabalho, tornando-a menos legível.
- Precisa de uma atenção quando lidando com um ambiente multithread, para garantir que a instância única seja criada corretamente.
- Dificulta a criação de testes unitários, pois a classe Singleton pode ter dependências difíceis de isolar.
