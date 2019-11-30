/*8. Dado o array da questão anterior, escreva um script que leia um nome de um dos estados ou do distrito federal e informe se o estado que ele procura está presente no array, o script 
deve fazer o tratamento da string passada, exemplo: se o usuário digitar PaRaíBa o programa deve retornar que o mesmo existe, agora 
de for passado um nome que não se encontre no meu array o programa deve retornar que o mesmo não se encontra.*/
function estado(nome){
    for(let k=0; k<=26;k++){
        if(nome==estados[k]){
            return 'Estado encontrado'
        }
    }
    return 'Estado não encontrado'
}
let estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
    ]

    var nome = prompt('informe o estado corretamente:');
    document.write(estado(nome))
