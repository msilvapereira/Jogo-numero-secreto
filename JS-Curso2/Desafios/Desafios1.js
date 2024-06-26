// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!'

// Crie uma função que exiba no console a mensagem 'O botão foi clicado!' sempre que o botão Console for pressionado.

function exibirConsole() {
    console.log('O botão foi clicado!');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS!, sempre que o botão Alerta for pressionado.

function alertaPressionado() {
    alert('Eu amo JS!');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function promptCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function soma() {
    let n1 = prompt('Digite um número:')
    let n2 = prompt('Digite um número:')
    soma = parseInt(n1) + parseInt(n2);
    alert(`A soma de ${n1} + ${n2} é igual a: ${soma}`)
}