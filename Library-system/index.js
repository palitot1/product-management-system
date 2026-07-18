let livros = [
    { titulo: "Dom Casmurro", disponivel: true },
    { titulo: "O Hobbit", disponivel: true },
    { titulo: "Clean Code", disponivel: false }
];

function listarLivros(){
    for (let i = 0; i < livros.length; i++){
        let livro = livros[i].titulo;
        console.log(livro)
    }
}

function emprestarLivro(titulo){
   
    for( let i = 0; i < livros.length; i++){
        if(livros[i].titulo === titulo && livros[i].disponivel === true){
            livros[i].disponivel = false
            
            console.log(`O livro ${livros[i].titulo} emprestado com sucesso!`);
            return;

        } else if (livros[i].titulo === titulo && livros[i].disponivel === false){
            console.log(`O livro ${livros[i].titulo} nao esta disponivel`);
            return;
        }
    }
    console.log(`O livro ${titulo} não foi encontrado`)
}

function devolverLivro(titulo){
    for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo === titulo && livros[i].disponivel === false){
            livros[i].disponivel = true
            let devolver_livro = livros[i].titulo;
            console.log(`o livro ${livros[i].titulo} foi devolvido!`);
            return;
        }else if (livros[i].titulo === titulo && livros[i].disponivel === true){
            console.log(`O livro ${livros[i].titulo} ja foi devolvido`);
            return;
        }
    }
    console.log(`O livro ${titulo} não foi encontrado`);
}

function buscarLivro(titulo){
    for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo === titulo && livros[i].disponivel === true){
            console.log(`O livro ${livros[i].titulo} está disponivel!`);
            return;
        } else if (livros[i].titulo === titulo && livros[i].disponivel === false){
            console.log(`O livro ${livros[i].titulo} não esta disponivel`);
            return;
        }
    }
    console.log(`O livro ${titulo} não foi encontrado `)
}

console.log("Listar livros:")
listarLivros();
console.log("\n");
console.log("Emprestar Livro:");
emprestarLivro("O hobbit");
console.log("\n");
console.log("devolver Livro:");
devolverLivro("O Hobbit");
console.log("\n");
buscarLivro("O Hobit");
