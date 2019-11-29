/* 13. Escreva um script que leia uma palavra e um carectere e informe quantas vezes o caractere
aparece dentro da palavra. */

let word = prompt('Informe uma palavra');
let caractere = prompt('Informe um caractere');

function contar(word,caractere) {
    let count=0;
    for(let k=0;k<word.length;k++) {
        if(word[k] === caractere) {
            count++;
        }
    }
    return count;
};

let count = contar(word,caractere);

alert(caractere + ' aparece ' + count + ' vezes');