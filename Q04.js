const prompt = require('prompt-sync')();

const data = prompt('Qual sua data de nascimento? ');

let caracteres = data.split('');
let soma = 0;
caracteres.forEach(caractere => {
    if (!isNaN(caractere)) {
        soma += parseInt(caractere);
    }
});

console.log(soma);
