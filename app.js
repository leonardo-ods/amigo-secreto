listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        listaAmigos.push(amigo);
        console.log(amigo);
        console.log(listaAmigos);
        exibirNomeNaLista('ul', amigo);
        limparCampo();
    }
} 

function exibirNomeNaLista(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML += `<li>${texto}</li>`;
}

function limparCampo() {
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert('Adicione amigos antes de sortear!')
    }
    let indiceAleatorio = parseInt(Math.random() * listaAmigos.length);
    console.log(indiceAleatorio);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    console.log(amigoSorteado);
}
