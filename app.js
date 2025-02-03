//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear.");
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    let resultadoSorteio = amigos[nomeSorteado];
    document.getElementById('resultado').textContent = resultadoSorteio;
}

function percorrerLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function adicionarAmigo() {
    let campoNome = document.querySelector('input').value;

    if (campoNome != '') {
        amigos.push(campoNome)
        limparCampoNome();
        percorrerLista();
    } else {
        alert("Por favor, insira um nome válido.");
        return;
    }
}

function limparCampoNome() {
    let campoNome = document.querySelector('input');
    campoNome.value = '';
}