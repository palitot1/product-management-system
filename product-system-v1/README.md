#  Sistema de Produtos em JavaScript

Desenvolvi esse projeto durante meus estudos de JavaScript com o objetivo de praticar a logica de programação e os conceitos.

A ideia foi criar um sistema simples de gerenciamento de produtos utilizando apenas JavaScript, sem bibliotecas ou frameworks.

##  Funcionalidades

* Cadastro de produtos
* Listagem de todos os produtos
* Busca de produtos pelo nome
* Aplicação de desconto utilizando
* Listagem de produtos sem estoque
* Geração de um relatório com os produtos cadastrados

##  Conceitos praticados

Durante o desenvolvimento deste projeto pratiquei:

* Variáveis
* Funções
* Objetos
* Arrays
* Estruturas de repetição (`for` e `forEach`)
* Condicionais (`if` e `else`)
* Método `map()`
* `push()`
* `return`
* Template Strings
* Organização de código

## Como executar

1. Clone este repositório:

```bash
git clone https://github.com/palitot1/javascript-practice.git
```

2. Acesse a pasta do projeto.

3. Execute o arquivo JavaScript utilizando o Node.js:

```bash
node app.js
```

##  Exemplo de uso

``` javascript
cadastrarProduto("Notebook", 3500, 5);
cadastrarProduto("Mouse", 120, 20);
cadastrarProduto("Teclado", 250, 0);

listarProdutos();
buscarProduto("Notebook");

console.log(aplicarDesconto(10));

listarProdutosSemEstoque();

relatorio();
```

##  Objetivo

Este projeto faz parte da minha jornada de aprendizado em JavaScript. Meu foco é fortalecer a lógica de programação antes de avançar para Node.js, APIs e bancos de dados.


