listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Escolha um nome válido.')
    } else {
        listaAmigos.push(amigo);
        console.log(amigo);
        console.log(listaAmigos);
        exibirNomeNaLista('ul', amigo);
    }
} 

function exibirNomeNaLista(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML += `<ul>${texto}</ul>`;
}

//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

