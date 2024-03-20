const leia = require('readline-sync')

let numero1;
let numero2;
let numero3;
let numero4;

numero1 = leia.questionFloat("Digite o primeiro número: ");
numero2 = leia.questionFloat( "Digite o segundo número: "); 
numero3 = leia.questionFloat("Digite o terceiro número: ")
numero4 = leia.questionFloat("Digite o quarto número: ");

let diferencaCalculo = (numero1 * numero2) - (numero3 * numero4)

console.log("A diferença é : " + diferencaCalculo)