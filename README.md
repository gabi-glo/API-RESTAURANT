# API-RESTAURANT

Projeto de estudo desenvolvido durante a formação Full Stack da Rocketseat. Trata-se de uma API REST completa para gerenciamento de um restaurante, incluindo controle de produtos, mesas e pedidos.

## Tecnologias Utilizadas

- Node.js e Express
- TypeScript
- Knex.js
- SQLite
- Zod

## Como Executar o Projeto

1. Clone o repositório:
   git clone https://github.com/gabi-glo/API-RESTAURANT.git

2. Acesse a pasta do projeto:
   cd API-RESTAURANT

3. Instale as dependências:
   npm install

4. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente (use o arquivo `.env.example` como base).

5. Execute as migrations para criar as tabelas no banco de dados:
   npm run knex -- migrate:latest

6. (Opcional) Popule o banco com dados iniciais:
   npm run knex -- seed:run

7. Inicie o servidor:
   npm run dev

O servidor estará rodando em http://localhost:3333.

## Endpoints

- GET /products - Lista todos os produtos
- POST /products - Cadastra um novo produto
- GET /tables-sessions - Lista as sessões de mesas
- POST /tables-sessions - Abre uma nova sessão de mesa

*Nota: Para testar as rotas, utilize ferramentas como Insomnia no VS Code.*

## Autora

Gabriela Oliveira
- GitHub: https://github.com/gabi-glo
