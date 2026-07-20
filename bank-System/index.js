let clientes = [];

function cadastrarCliente(nome, saldo){
    let cliente = {
        nome: nome,
        saldo: 0
    }

    clientes.push(cliente);
    console.log(`Cliente ${nome} cadastrado!`);
}

function depositar(nome, saldo){
    
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].nome === nome){
            clientes[i].saldo += saldo;
            console.log(`o valor de ${clientes[i].saldo} foi depositado na conta de ${nome}`);
            return;
        }
    }
    console.log(`Cliente ${nome} não foi encontrado`)
}

function sacar(nome, valor){
   
    
    for(let i = 0; i < clientes.length; i++){
        if (clientes[i].nome === nome && clientes[i].saldo >= valor){
            clientes[i].saldo -= valor;
            console.log(`Saque de ${valor} foi realizado`);
            return;
        }else if(clientes[i].nome === nome && clientes[i].saldo <= valor){
            console.log("Saldo insuficiente")
            return;
        }
    }
    console.log(`O cliente ${nome} não foi encontrado`)
}

function transferir(origem, destino, valor){
    let contaOrigem = origem;
    let contaDestino = destino;
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].nome === contaOrigem && clientes[i].saldo >= valor){
            clientes[i].saldo -= valor;
            
        }else if(clientes[i].nome === contaOrigem && clientes[i].saldo <= valor){
                console.log(`Saldo insuficiente`);
                return;
            }if(clientes[i].nome === contaDestino){
                clientes[i].saldo += valor
                console.log(`${contaDestino} Voce recebou uma transferencia no valor de ${valor}.`);
                return;
            }
    }
    console.log(`Não foi possivel localizar ${contaDestino}`)
}

function consultarSaldo(nome){
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].nome === nome){
            console.log(`${nome} seu saldo atual é de ${clientes[i].saldo}`)
        }
    }
}

function listarClientes(){
    
        console.log("Lista de clientes");
        console.log("\n");
        console.log(clientes);
    
}

cadastrarCliente("eduardo");
cadastrarCliente("andre");
depositar("andre", 200);
depositar("eduardo", 50000);
sacar("eduardo", 100)
transferir("eduardo", "andre", 2000);
consultarSaldo("eduardo");
consultarSaldo("andre");
listarClientes();

