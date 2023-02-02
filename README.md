# My Pokemon Trainer API

## Objetivo
Este projeto é uma execução da API `pokeapi.com` com foco em construir uma pokédex para cada treinador dessa internet! 

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=rafaelPermec_pokemon-trainer-party)

## Técnologias usadas

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## Como rodar o projeto?

<details>
<summary><code>Localmente</code></summary>
  
  1 - Dê o fork no projeto e clone-o para sua maquina com o comando 
  `git clone git@github.com:rafaelPermec/pokemon-trainer-party.git`
  em seu terminal.
  
  2 - Entre com o comando `cd pokemon-trainer-party && npm install` para entrar no diretório principal e instalar as dependências do projeto.
  
  3 - Crie um arquivo `.env` e configure as variáveis de ambiente
   ```js
   PORT=3001
   DB_MONGO_URI=`mongodb://localhost:27017/${nomeDeSeBancoDeDados}`
   DB_MONGO_DBNAME='nomeDeSeBancoDeDados'
   ```
  
  4 - Digite `npm start` ou `npm run dev` para começar a rodar o servidor. Ele estará na porta `3001`.
  
  5 - Abra seu GUI preferido (Postman, Insomnia ou Thunder Cliente) para fazer as requisições à minha API! 😃
  
  6 - Não se esqueça de direcionar sua GUI de requisições ou Browser para `http://localhost:3001`.
  
  7 - Para visualizar a documentação, basta acessar  `http://localhost:3001/api-doc`
  
 </details>

## Executando Testes

<details>
<summary>Para rodar todos os testes, execute o comando abaixo na mesma pasta que está o <code>package.json</code>:</summary></code>

  ```
    npm run test
  ```
</details>

## Roadmap:

  1 - Vá até o endpoint `/pokemon/generate` para gerar um pokemon aleatório. Você pode enviar novas requisições `GET` para este mesmo endpoint, e vai ficar parecendo que está correndo na grama do jogo!
  
  2 - Depois até o endpoint `/item/generate` para gerar um item aleatório, que pode ser trocado enviando uma requisição `GET` para este mesmo endpoint - fique atento! É difícil ele se repetir!
  
  3 - Dê um nome para o seu pokémon, utilizando o `body: { newName: 'nomeDePreferencia' }` na rota `PATCH /pokemon/add-party-name`.
  
  4 - Anexe o item que você encontrou no passo dois através do endpoint `PATCH /item/add-item`.
  
  5 - Cansou do item? Você pode retira-lo de seu pokémon pela rota `PATCH /item/remove-item`.
  
  6 - Agora sim, capture o pokémon pela rota `POST /pokemon/capture`!!
  
  7 - Quer ver quantos pokemons capturou até agora?? Cheque sua pokédex na rota `GET /pokedex`.
  
  8 - Se quiser soltar um pokémon, utilize a rota `DELETE /pokedex/remove/id/:id` - aonde o `:id` é o número identificador do seu pokémon na aplicação!
  
  9 - Cansou e quer liberar todos? Utilize a rota `DELETE /pokedex/remove/all` 
