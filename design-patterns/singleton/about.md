# Singleton

## O que é?

Singleton é um padrão de projeto que garante que uma classe tenha apenas uma instância, fornecendo um ponto de acesso global a ela. É extremamente útil quando é necessário limitar o número de instâncias de uma classe a um único objeto.

Um exemplo clássico de uso do padrão Singleton é em classes que gerenciam conexões a bancos de dados, como o Prisma Client. Ao garantir que apenas uma instância do cliente Prisma seja criada, o padrão ajuda a evitar problemas de concorrência e garante que todas as operações no banco de dados sejam realizadas através da mesma instância.

```typescript
import { PrismaClient } from '@prisma/client';

class Database {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient();
    }

    return Database.instance;
  }
}
```

## Como funciona?

O padrão Singleton geralmente envolve os seguintes passos:

1. **Construtor Privado**: O construtor da classe é declarado como privado, impedindo que outras classes criem instâncias dela diretamente.

2. **Método Estático**: Um método estático é criado para fornecer acesso à instância única da classe. Esse método verifica se a instância já foi criada e, caso contrário, cria uma nova instância.

## Exemplos

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

## Quando não utilizar?

- **Aplicações altamente pararelas**
    O padrão Singleton pode se tornar um gargalo em aplicações altamente paralelas, onde múltiplas threads ou processos tentam acessar a mesma instância simultaneamente, como instâncias de banco de dados.

- **Testes unitários**
    O padrão Singleton pode dificultar a realização de testes unitários, pois a instância única pode manter estado entre os testes, levando a resultados inconsistentes.

- **Serviços temporários**
    O padrão Singleton não é adequado para serviços que precisam ser criados e destruídos frequentemente, como serviços de autenticação.
