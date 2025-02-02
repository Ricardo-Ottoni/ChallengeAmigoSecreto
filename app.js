//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function percorrerLista() {
    let lista = document.querySelector('#listaAmigos');
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
        alert("Por favor, insira um nome válido.")
    }
}

function limparCampoNome() {
    let campoNome = document.querySelector('input');
    campoNome.value = '';
}