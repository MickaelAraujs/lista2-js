/*1. Escreva um script que leia 10 números inteiros e os adicione em um array. No array só poderão
estar presentes os números positivos. A criação do array deverá ser feita através de uma função */

var tamanhoArray = 10;

function lerNumeros(tamanhoArray){
    var k;
    var array = [];
    var aux;
    for(k=0;k<tamanhoArray;k++){
        aux = prompt("Informe um numero");
        if(aux>0){
            array.push(aux);
        }
        else{
            k--;
        }
    }
    array.forEach(print);
}

lerNumeros(tamanhoArray);

function print(item, index){
    document.write(item + "<br>");
}