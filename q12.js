/* 12. Escreva um script que leia uma string e a transforme em um array, no array não poderá se
encontrar nenhum dos seguintes caractere: , . \ | ~ ^ . */

let word = prompt('Informe uma string');

var aux = /[^a-z0-9]/gi;

word = word.replace(aux, "");

let arrayOfString = word.split("");

document.write(arrayOfString);