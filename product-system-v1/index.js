let produtos = [];

function cadastrarProduto(nome, preco, estoque){
    
    let produto = {
        nome: nome,
        preco: preco,
        estoque: estoque
    }

    produtos.push(produto);
    console.log(`Produto ${nome} cadastrado com sucesso!
        `);
}

function listarProdutos(){
    console.log("==========Lista de Produtos==========")
    produtos.forEach((produto) => {
        console.log(`${produto.nome} - R$ ${produto.preco} - estoque: ${produto.estoque}`)
    })
}

function buscarProduto(nome){
    console.log("==========Buscar Produto==========")
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome === nome){
            console.log(`Produto encontrado:
                
nome: ${produtos[i].nome}
preco: ${produtos[i].preco}
estoque: ${produtos[i].estoque}`);
return;
        }
    }
    console.log("Produto não encontrado")

}

function aplicarDesconto(percentual){
    console.log("==========Aplicar Desconto==========")
    let descontoValor = produtos.map((produto) => {
        return {
            nome: produto.nome,
            preco: produto.preco - (produto.preco * percentual / 100),
            estoque: produto.estoque
        }
    });
    return descontoValor;
}



function listarProdutosSemEstoque(){
    console.log("==========Produtos Sem Estoque==========")
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].estoque === 0){
            console.log(`estoque de ${produtos[i].nome} zerado`);
            
        }
    }
    
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

buscarProduto()

console.log(aplicarDesconto(10))

listarProdutosSemEstoque();

relatorio()