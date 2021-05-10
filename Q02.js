const prompt = require('prompt-sync')();
const nome = prompt('Digite seu nome:');
const invertida = nome.split("").reverse().join("");
console.log(invertida);