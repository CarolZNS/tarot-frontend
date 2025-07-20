<a name="readme-top"></a>

<div align="center">
  <h1 align="center">Tarô básico</h1>

  <p align="center">
    Um front-end de estudo focado em puxar cartas de tarô
  </p>
</div>


## Sobre o projeto

Um MVP de um front-end para consumir o back-end de um desafio fullstack. O front cuida de registrar, logar e tirar as cartas para os usuários logados

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Tecnologias usadas

- [Next.js (App Router)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Axios para consumo de API

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Rodando o front-end

### Pré-requisitos

- Npm ou yarn.
- O projeto Back-end já rodando. [Acesse aqui]()

### Instalação


1. Clone o repo
   ```bash
   git clone 
   ```
2. Instalar NPM packages
   ```sh
   npm install
   ```
3. Configurar o arquivo .env conforme o .env.example
   ```
   API_URL='http://localhost:3001'
   ```
4. Rodar o projeto
   ```sh
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Funcionalidades
- Página de login e registro.
- Ao registrar, é redirecionado à página de login.
- Proteção da rota principal: redirecionamento automático caso o usuário não esteja logado.
- Token JWT.
- Logout funcional com botão no canto superior esquerdo.
- Página principal com leitura de cartas.

## Importante
Certifique-se que o backend esteja rodando antes do front-end!

<!-- CONTACT -->
## Contato

Carolina Nunes - nunes.carolzs@gmail.com
Project Link: [https://github.com/CarolZNS/ColorDex](https://github.com/CarolZNS/ColorDex)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
