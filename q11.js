/* 11. Dada uma string no seguinte modelo e sempre de mesmo tamanho: “Maçã, Carro, Nada”
escreva um script que me retorne sempre a segunda palavra da mesma. */

const segundaPalavra = function(str) {
    let resultado = str.split(",");
    return resultado[1];
};

let str = prompt('Informe uma string no seguinte formato:  “Maçã, Carro, Nada”');

let palavra = segundaPalavra(str);
document.write(palavra);