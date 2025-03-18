<h1 align="center">Testes de Performance com k6</h1>

## 💻 Sobre o projeto

Este projeto tem como objetivo introduzir conceitos de testes de performance utilizando a ferramenta **k6**. A aplicação **User API** foi desenvolvida para testar diferentes cenários de carga e stress, garantindo qualidade e eficiência.

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [X] O cadastro com sucesso deve ocorrer em até 2 segundos
- [X] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [X] Deve poder cadastrar até 100 usuários simultâneos
- [X] A margem de erro no cadastro deve ser de pelo menos 1%

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:
<br>
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white)

## 🚀 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

```bash
# Clone este repositório
git clone https://github.com/weareqacademy/curso-k6-basico.git

# Acesse a pasta do projeto no terminal/cmd
cd curso-k6-basico/api

# Libere o gerenciador de pacotes Yarn
corepack enable

# Instale as dependências
yarn install

# Execute a aplicação
yarn dev
```

## 📺 Playlist do Curso

Para acompanhar o curso completo, acesse a playlist no YouTube:
[Introdução aos Testes de Performance com k6](https://youtube.com/playlist?list=PLn2i8I7W73irNVpzHDU2oKWCKLa2VPWEx&si=ADLp14E-U4BO3djx)

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com ❤️ por Moira Abile 👋🏽 [Entre em contato!](https://br.linkedin.com/in/moira-luiza-abile-93526816a)

