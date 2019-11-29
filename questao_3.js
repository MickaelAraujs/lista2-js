/*3. Diferente da linguagem C a linguagem JavaScript, ECMA, não possui uma forma explícita de se
declarar uma matriz, porém é possível representarmos uma através de um array de arrays, sendo
assim crie um script que simule uma matriz 3x3 de números inteiros e a transforme em uma matriz
transposta, ao final imprima meu array no formato de uma matriz. */

var ordem = 2;

function matriz(ordem){
    var k;
    var mat = [];
    var aux;
    for(k=0; k<ordem*ordem; k++){
        aux = prompt("Informe um número");
        mat.push(aux);
    }
    document.write("Imprimindo a matriz:<br>");
    for(k=0; k<ordem*ordem; k++){
        document.write(mat[k] + " ");
        if((k+1)%ordem == 0){
            document.write("<br>");
        }
    }
    var l;
    var c;
    var i;
    for(l=0;l<ordem-1;l++){
        for(c=l+1;c<ordem;c++){
            k =l*ordem + c;
            i =c*ordem + l;
            aux = mat[k];
            mat[k] = mat[i];
            mat[i] = aux;
        }
    }
    document.write("Imprimindo a matriz transposta:<br>");
    for(k=0; k<ordem*ordem; k++){
        document.write(mat[k] + " ");
        if((k+1)%ordem == 0){
            document.write("<br>");
        }
    }
}

matriz(ordem);