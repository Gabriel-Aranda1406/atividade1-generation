const leia = require('readline-sync')

let nota1;
let nota2;
let nota3;
let nota4;


nota1 = leia.questionFloat("Digite a média: ");
nota2 = leia.questionFloat("Digite a média: ");
nota3 = leia.questionFloat("Digite a média: ");
nota4 = leia.questionFloat("Digite a média: ");

let mediaGeral = (nota1 + nota2 + nota3 + nota4) / 4;
let mediaFormatada = mediaGeral.toFixed(1);
// Como o exercício pedia 8,1 de saída, optei pelo toFixed(1) para mostrar 8,1 ao invés de 8,125.

console.log("A média final é: ", mediaFormatada);