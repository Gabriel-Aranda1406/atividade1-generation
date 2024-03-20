const leia = require('readline-sync')

let salario;
let abono;

salario = leia.questionFloat("Digite o Salário: ");
abono = leia.questionFloat("Digite o abono: " );

let soma = salario + abono;

console.log("O novo salário é R$: ", soma);