let produtos = [
    {nome: "Camiseta", preco: 29.90, estoque : 100},
    {nome: "Calça", preco: 79.90, estoque : 0},
    {nome: "Tênis", preco: 199.90, estoque : 0 },
    {nome: "Jaqueta", preco: 149.90, estoque : 20},
]

function listarProdutos() {
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i].nome;
        console.log(produto);
}
}

function listarProdutosDisponiveis() {
    for (let i = 0; i < produtos.length; i++) {
        if( produtos[i].estoque > 0){
            let produto = produtos[i].nome;
            console.log(produto);
        }else{
            console.log(`O produto ${produtos[i].nome} está indisponível no momento.`);
        }
}
}

function calcularEstoqueTotal() {

    let estoqueTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        estoqueTotal += produtos[i].estoque;
        estoqueTotal += produtos[i].preco * produtos[i].estoque;
        console.log(`Produto: ${produtos[i].nome}, Estoque: ${produtos[i].estoque}, Preço: ${produtos[i].preco}`);
        
    }
    console.log(`Estoque Total: ${estoqueTotal}`);
    }

function produtoMaisCaro() {
        
    let produtoMaisCaro = produtos[0];
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco > produtoMaisCaro.preco){
            produtoMaisCaro = produtos[i];
            console.log(`O produto mais caro é: ${produtos[i].nome} com o preço R$ de ${produtos[i].preco} `);
        } else {
            console.log(`O produto mais caro é: ${produtoMaisCaro.nome} com o preço R$ de ${produtoMaisCaro.preco} `);
        }
}
}

function estoqueMaiorQueZero() {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].estoque > 0){
            console.log(`Existem ${produtos[i].estoque} unidades do produto ${produtos[i].nome} em estoque.`);
        }else{
            console.log(`O produto ${produtos[i].nome} está indisponível no momento.`);
        }
}
}

function buscarProduto(nome){
    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].nome == nome){
            console.log(produtos[i]);
           return;
        }
    }
    console.log(`O produto ${nome} não foi encontrado.`);
    return null;
}

console.log("Lista de Produtos:");
listarProdutos();
console.log("\n");
console.log("Produtos Disponíveis:");
listarProdutosDisponiveis();
console.log("\n");
console.log("Estoque Total:");
calcularEstoqueTotal();
console.log("\n");
console.log("Produto Mais Caro:");
produtoMaisCaro();
console.log("\n");
console.log("Estoque Maior Que Zero:");
estoqueMaiorQueZero();
console.log("\n");
console.log("Buscar Produto:");
console.log(buscarProduto("Camioculosseta"));