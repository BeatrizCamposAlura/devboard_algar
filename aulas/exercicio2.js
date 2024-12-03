/*Crie uma função em JavaScript que receba duas listas como parâmetros: uma lista contendo os nomes dos artefatos encontrados e outra lista com os níveis de raridade correspondentes. A função deve exibir cada artefato com seu respectivo nível de raridade no console e, no final, retornar o número total de artefatos raros encontrados (considerando que um artefato é raro se seu nível de raridade for maior que 5).

let artefatos = ["Mapa antigo", "Pedra preciosa", "Colar misterioso", “Amuleto encantado”];
let niveisRaridade = [3, 5, 7, 9];*/

let artefatos = ["Mapa antigo", "Pedra preciosa", "Colar misterioso", "Amuleto encantado"];
let niveisRaridade = [3, 5, 7, 9];
let artefatosRaros = [];

function niveladorRaridade(artefatos, niveisRaridade){
for(let i = 0; i < artefatos.length; i++){
    console.log(`Artefato: ${artefatos[i]} - nivel raridade: ${niveisRaridade[i]}`);
    if(niveisRaridade[i] > 5){
        artefatosRaros.push(artefatos[i]);
    }
}

console.log(`Lista de Objetos Raros: ${artefatosRaros}`);
}

niveladorRaridade(artefatos, niveisRaridade);