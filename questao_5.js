/*5. Escreva um script que leia um determinado array e imprima o mesmo de forma reversa. */

function lerArray(){
    var k;
    var tamanho = prompt("Informe o tamanho do array");
    var array = [];
    var aux;
    for(k=0;k<tamanho;k++){
        aux = prompt("Escreva um elemento do array");
        array.push(aux);
    }
    for(k=tamanho; k>0; k--){
        document.write(array[k-1] + "  ");
    }
}

lerArray();