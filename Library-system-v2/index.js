let livros = []

function cadastrarLivro(id, titulo, autor, categoria, preco, estoque){

    let livro = {
        id: id++,
        titulo: titulo,
        autor: autor,
        categoria: categoria,
        preco: preco,
        estoque: estoque

        
    }

    livros.push(livro)
    console.log("Livro cadastrado")
}

function listarLivro(){
    console.log("==================Listar Livros==================")
    for(let i = 0; i < livros.length; i++){
        console.log(livros[i])
    }
}

function buscarPeloId(id) {
    console.log("==================Busca Pelo ID==================")
   let resultado = livros.find((livro) =>{
        return livro.id === id
   })
   console.log(resultado)
}

function filtrarCategoria(categoria){
    console.log("==================Busca livros por Categoria==================")
    let livroCategoria = livros.filter((livro) =>{
        return livro.categoria === categoria
    })
    console.log(livroCategoria)
}

cadastrarLivro(1,  "A sutil arte", "percy", "Auto ", 50, 10)
cadastrarLivro(2,  "A sutil arte", "percy", "Auto ajuda", 50, 10)
listarLivro()
buscarPeloId(2)
filtrarCategoria("Auto ajuda")
