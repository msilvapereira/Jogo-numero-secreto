// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularImc() {
    let altura = prompt('Digite sua altura: ');
    let peso = prompt('Digite seu peso: ')
    let imc = peso / (altura * altura);
    return prompt(`Seu Índice de Massa Corporal(IMC) é igual a: ${parseFloat(imc.toFixed(2))}`)
}

calcularImc();

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


/* 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversor(dolar) {
    let cotacao = 4.80;
    let valorReais = dolar * cotacao; 
    return valorReais.toFixed(2);
}

let dolar = 50;
let valorReais = conversor(dolar);
console.log(`${dolar} equivalem a R$ ${valorReais} reais.`);
*/

/* 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área da sala é de: ${area} metros quadrados.`);
    console.log(`Perimetro da sala: ${perimetro} metros quadrados.`);
}

calcularSalaRetangular(5, 3);
*/

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircular(raio) {
    let area = 3.14 * raio * raio;
    let perimetro = 2 * 3.14 * raio;

    console.log(`A área da sala cirular é de ${area.toFixed(2)} metros quadrados;`)
    console.log(`O perímetro da sala cirular é de ${perimetro.toFixed(2)} metros quadrados;`)
}

calcularSalaCircular(3);

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. 