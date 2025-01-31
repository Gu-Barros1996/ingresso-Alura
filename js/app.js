function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        compraPista(qtd);
    } else if (tipo.value == 'superior'){
        compraSuperior(qtd);
    } else if (tipo.value == 'inferior'){
        compraInferior(qtd);
    }
}

function compraPista(qtd){
    //parseInt = criada para buscar um numero inteito;
    //.textContent = identifica um elemento no html em formato de texto. 
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    //variavel criada para nao deixar o cliente comprar mais bilhetes do que tem disponivel.
    if(qtd > qtdPista){
        alert('Quantidade indisponivel para o tipo PISTA!');        
    //fazer a subtração quando a compra for menor do que o disponivel.
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Voce conseguiu comprar');
    }
}

function compraSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    //variavel criada para nao deixar o cliente comprar mais bilhetes do que tem disponivel.
    if(qtd > qtdSuperior){
        alert('Quantidade indisponivel para o tipo Superior!');    
    //fazer a subtração quando a compra for menor do que o disponivel.
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Voce conseguiu comprar');
    }
}

function compraInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
     //variavel criada para nao deixar o cliente comprar mais bilhetes do que tem disponivel.
     if(qtd > qtdInferior){
        alert('Quantidade indisponivel para o tipo Inferior!');
    //fazer a subtração quando a compra for menor do que o disponivel.
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Voce conseguiu comprar');
    }
}