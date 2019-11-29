/* 2. Escreva um script que leia dois arrays de tamanho 5, sendo um de números inteiros positivos e
outro de strings, e gere um terceiro array com a junção dos dois, porém o novo array deverá ser
intercalado com o valor dos anteriores, veja o exemplo a seguir: array1 = [1,2,3,4,5] array2 =
[“Pera”, “Uva”, “Maçã”, “Mamão”, “Graviola”] novoArray = [1,”Pera”, 2, “Uva”, 3, “Maçã”, 4,
“Mamão”, 5, “Graviola”] */

var tamanhoArray = 3;

function lerArray(tamanhoArray){
    var k;
    var arrayNum = [];
    var arrayStr = [];
    var aux;
    for(k=0;k<tamanhoArray;k++){
        aux = prompt("Informe um numero");
        arrayNum.push(aux);
    }
    document.write("Array de numeros:")
    for(k=0;k<tamanhoArray;k++){
        document.write(arrayNum[k] + "  ");
    }
    for(k=0;k<tamanhoArray;k++){
        aux = prompt("Informe uma palavra");
        arrayStr.push(aux);
    }
    document.write("<br><br>Array de palavras: ")
    for(k=0;k<tamanhoArray;k++){
        document.write(arrayStr[k] + "  ");
    }
    var arrayMerged = [];
    for(k=0;k<tamanhoArray;k++){
        arrayMerged.push(arrayNum[k]);
        arrayMerged.push(arrayStr[k]);
    }
    document.write("<br><br>Junção dos arrays: ");
    for(k=0;k<tamanhoArray*2;k++){
        document.write(arrayMerged[k] + "  ");
    }
}

lerArray(tamanhoArray);
