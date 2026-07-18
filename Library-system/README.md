#  Sistema de Biblioteca

Desenvolvir esse simples projeto com o objetivo de praticar lógica de programação e manipulação de dados utilizando apenas JavaScript.

A ideia foi criar um sistema simples que simula algumas operações básicas de uma biblioteca, como consultar, emprestar e devolver livros.

---

## Funcionalidades

- Listar todos os livros cadastrados.
- Buscar um livro pelo título.
- Emprestar um livro disponível.
- Devolver um livro emprestado.
- Informar quando um livro já está emprestado.
- Informar quando o livro não é encontrado.

---

## Tecnologias

- JavaScript

---


## Como executar

Clone o repositório:

```bash
git clone https://github.com/palitot1/javascript-practice.git
```

Acesse a pasta do projeto:

```bash
cd Library-system
```

Execute o arquivo:

```bash
index.js
```

---

## Estrutura dos dados

Os livros são armazenados em um array de objetos.

```javascript
let livros = [
    { titulo: "Dom Casmurro", disponivel: true },
    { titulo: "O Hobbit", disponivel: true },
    { titulo: "Clean Code", disponivel: false }
];
```

Cada livro possui:

- **titulo**: nome do livro.
- **disponivel**: informa se o livro pode ser emprestado ou não.

---

## O que pratiquei neste projeto

Durante o desenvolvimento deste projeto, pratiquei conceitos importantes de JavaScript, como:

- Criação de funções
- Arrays e objetos
- Estruturas de repetição (`for`)
- Estruturas condicionais (`if`, `else if` e `else`)
- Manipulação de objetos dentro de arrays
- Organização do código em funções

---

## Melhorias futuras

Pretendo continuar evoluindo este projeto adicionando novas funcionalidades, como:

- Cadastro de novos livros.
- Remoção de livros.
- Busca sem diferenciar letras maiúsculas e minúsculas.


---

## Autor

Desenvolvido por **Eduardo Palitot** como parte dos meus estudos em JavaScript.