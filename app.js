alert('Boas-vindas ao jogo do Número Secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto numeroSecreto: ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}