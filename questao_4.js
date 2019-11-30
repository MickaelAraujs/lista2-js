/*4. Escreva um script que leia uma expressão matemática formada por ( ) informe se ela é bem
formada ou não, sendo que para que a mesma seja bem formada a quantidade de parênteses abertos
deve possuir a mesma quantidade de parênteses fechando, além é claro de os mesmos serem
fechados e abertos de maneira correta. Veja o exemplo: A - ( B+A) /) + C ( , nesse exemplo a
expressão é mal formada.*/

function verifica(){
    var formula = prompt("Informe uma fómula matemática");
    var k;
    var contAbrt = 0;
    var contFech = 0;
    var array = formula.split("");
    for(k=0;k<array.length;k++){
        if(array[k] == "("){
            contAbrt++;
        }
        if(array[k] == ")"){
            contFech++;
        }
    }
    if(contAbrt == contFech){
        document.write("A formula é bem formada");
    }
    else{
        document.write("A formula é mal formada");
    }
}

verifica();