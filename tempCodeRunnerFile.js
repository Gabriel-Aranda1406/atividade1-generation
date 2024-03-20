const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = leia.questionFloat("Digite o valor do salário bruto: ")
adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: ")
horasExtras = leia.questionFloat('Digite o valor de horas extras: ')
descontos = leia.questionFloat('Digite o valor dos descontos: ')

let salarioliquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log('O salário líquido é de : R$ ' + salarioliquido);