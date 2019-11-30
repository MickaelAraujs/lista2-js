/* 6. Escreva um script que leia uma array e imprima o mesmo com os valores separados pela palavra and */

function lerArray(){
    var k;
    var tamanho = prompt("Informe o tamanho do array");
    var array = [];
    var aux;
    for(k=0;k<tamanho;k++){
        aux = prompt("Escreva um elemento do array");
        array.push(aux);
    }
    for(k=0;k<tamanho-1;k++){
        document.write(array[k] + "  and  ");
    }
    document.write(array[tamanho-1]);
}

lerArray();