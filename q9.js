/* 9. Escreva um script que leia uma string qualquer e remova todos os espaços em branco da mesma.
Ao final o script deverá mostrar a string digitada com os espaços em branco e sem os espaços. */

const removeEspacos = function(str) {
    let newStr = str.replace(/\s/gi, '');
    return newStr;
}

let str = prompt('Informe uma string: ');

const newStr = removeEspacos(str);

document.write('String com os espaços: ' + str + '<br>' + 'String sem espaços: ' + newStr);