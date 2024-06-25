// Criar uma função que exibe "Olá, mundo!" no console.

function helloWorld() {
    console.log('Olá, Mundo!');
}

helloWorld();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaName(name) {
    console.log(`Olá, ${name}!`);
}

olaName('Maria');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(number) {
    return console.log(number * 2);
}

dobroNumero(4)

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {
    return console.log((n1 + n2 + n3) / 2)
}

media(2, 2, 2)

function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
console.log(maiorNumero(30, 25))

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
    return numero * numero;
}
console.log(quadrado(5))