const prompt = require('prompt-sync')();

const ddd = prompt('Digite um ddd: ');

const listaDDDs = {
    '61': 'Brasília',
    '71': 'Salvador',
    '11': 'São Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas'

}
console.log(listaDDDs[ddd] || '[DDD Não cadastrado.]');