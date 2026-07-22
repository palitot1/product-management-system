let produtos = [];

function cadastrarProduto(nome, preco, estoque){
    let produto = {
        nome: nome,
        preco: preco,
        estoque: estoque
    }

    produtos.push(produto);
    console.log(`Produto ${nome} cadastrado com sucesso!`);
}

function listarProdutos(){
    produtos.forEach((produto) => {
        console.log(`${produto.nome} - R$ ${produto.preco} - estoque: ${produto.estoque}`)
    })
}

function buscarProduto(nome){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome === nome){
            console.log(`Produto encontrado!
                
nome: ${produtos[i].nome}
preco: ${produtos[i].preco}
estoque: ${produtos[i].estoque}`);
return;
        }
    }
    console.log("Produto não encontrado")

}

function aplicarDesconto(percentual){
    let descontoValor = produtos.map((desconto) => {
        return {
            nome: produtos.nome,
            preco: produtos.preco - (produtos.preco * percentual / 100)
            
        }
    })
}

function listarProdutosSemEstoque(){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].estoque === 0){
            console.log(`estoque de ${produtos[i].nome} zerado`);
            return;
        }
    }
    console.log("voce ainda tem estoque de produtos")
}

function relatorio(){
    console.log("==========Relatorio==========");
    console.log(`Quantidade de produtos: ${produtos.length}`)
    console.log("Produtos cadastrados:")
    produtos.forEach((produto)  =>{
        console.log(produto.nome)
    });
    console.log("=============================")
}


cadastrarProduto("Notebook", 3500, 5);
cadastrarProduto("Mouse", 120, 20);
cadastrarProduto("Teclado", 250, 0);
listarProdutos()
buscarProduto("Notebook")
aplicarDesconto(10)
listarProdutosSemEstoque();
relatorio()