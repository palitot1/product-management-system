let alunos =[];


function cadastrarAluno(nome, nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    let aluno = {
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        media: media

    }

   
    alunos.push(aluno);
    console.log(`Aluno ${nome} cadastrado com sucesso!`);
   
}




function listarAprovados(){
    for(let i = 0; i < alunos.length; i++ ){
        if(alunos[i].media >= 7 ){
            console.log(`${alunos[i].nome} - Média: ${alunos[i].media.toFixed(2)}`
);
        }
    }
 
}

function buscarAluno(nome){
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nome == nome && alunos[i].media >= 7){
            console.log(`${nome} - media: ${alunos[i].media.toFixed(2)} - Situação: Aprovado`);
            return;
        } else if (alunos[i].nome == nome && alunos[i].media < 7){
            console.log(`${nome} - media: ${alunos[i].media.toFixed(2)} - Situação: Reprovado`);
            return;
        }

    }
    console.log(`Aluno ${nome} nao encontrado`)
    
}





console.log("Cadastro de Alunos:");
cadastrarAluno("João", 8, 7, 9);
cadastrarAluno("Maria", 9, 8, 10);
cadastrarAluno("Pedro", 6, 5, 7);
console.log("\n");

console.log("\n");
console.log("lista de aprovados")
listarAprovados()

console.log("\n");
console.log("Buscar aluno:")
buscarAluno("João")


