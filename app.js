listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaAmigos.push(amigo);
        exibirNomeNaLista('listaAmigos', amigo);
        limparCampo();
        // limpar campo de resultado
        document.getElementById('resultado').innerHTML = '';
    }
} 

function exibirNomeNaLista(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML += `<li>${texto}</li>`;
}

function limparCampo() {
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione amigos antes de sortear!');
        // limpar campo de resultado
        document.getElementById('resultado').innerHTML = '';
    } else {
        let indiceAleatorio = parseInt(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[indiceAleatorio];
        exibirNomeSorteado();
    }
}

function exibirNomeSorteado() {
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}.`;
    // limpar a lista de amigos:
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}