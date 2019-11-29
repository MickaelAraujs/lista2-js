/* 10. Escreva um script que leia uma frase e logo após uma palavra qualquer. No final o script deve
informar se a palavra se encontra na frase e quantas vezes ela aparece. */

const verificar = function(palavra,frase) {
    let aux = frase.split(" ");
    let count = 0;
    for(let k=0;k<aux.length;k++) {
        if(aux[k] === palavra) {
            count++;
        }
    }
    return count;
}

let frase = prompt('Digite uma frase:  ');
let palavra = prompt('Digite uma palavra: ');

let resultado = verificar(palavra,frase);

if(resultado!==0) {
    document.write(`${palavra} se encontra na frase e aparece ${resultado} vezes!`);
}
else {
    document.write('A palavra não se encontra na frase!');
}