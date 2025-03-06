# Facade

## O que é?

O padrão Facade é um padrão de projeto estrutural que fornece uma interface simplificada para um sistema complexo de classes, bibliotecas ou APIs. Ele atua como uma fachada para ocultar a complexidade do sistema subjacente e fornecer uma interface unificada para o cliente.

Um exemplo simples de uso do padrão Facade é um sistema de reprodução de mídia, que pode envolver várias classes e APIs para reproduzir áudio e vídeo. A fachada `MediaPlayer` pode fornecer métodos simples como `play`, `pause` e `stop` para controlar a reprodução, ocultando a complexidade de interagir com as classes subjacentes.

## Como funciona?

A idéia principal de uma facade é esconder o funcionamento complexo do resto do sistema, disponibilizando uma interface simples e unificada para o cliente. Isso permite que o cliente interaja com o sistema sem precisar conhecer os detalhes internos de como ele funciona.

## Quando utilizar?

- Quando existem subsistemas ou lógicas complexas que precisam ser simplificadas para o cliente/usuário.
- Quando é necessário reduzir o acoplamento entre o cliente e as classes do sistema.

## Quando não utilizar?

- Quando a complexidade do sistema não é um problema para o cliente/usuário.
- Quando o sistema é simples e não requer uma interface unificada.
