const prompt = require('prompt-sync')();
const nome = prompt('Digite seu nome:');

var metade = Math.ceil(nome.length/2);
console.log(nome.slice(0,metade));