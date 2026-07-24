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
    for(let i = 0; i < livros.length; i++){
        console.log(livros[i])
    }
}

cadastrarLivro(1,  "A sutil arte", "percy", "Auto ajuda", 50, 10)
listarLivro()
