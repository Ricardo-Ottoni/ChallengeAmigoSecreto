//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let campoNome = document.querySelector('input').value;

    if (campoNome != '') {
        amigos.push(campoNome)
        limparCampoNome();
        console.log(amigos);     //verificando criação da lista
    } else {
        alert("Por favor, insira um nome válido.")
    }
}

function limparCampoNome() {
    let campoNome = document.querySelector('input');
    campoNome.value = '';
}