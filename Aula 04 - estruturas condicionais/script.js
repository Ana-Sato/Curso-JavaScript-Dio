var jogador1 = 0;
var jogador2 = 0;
var placar;
/*
if (jogador1 != -1) {
    console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
    } else {
    console.log('Ninguem marcou ponto!')
}
*/

/* Aninhamento de if
if (jogador1 < 0) {
    if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
    } else {
    console.log('Ninguem marcou ponto!')
    }
}
*/

//if ternario
/*
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos'): 
console.log('Jogadores Invalidos!');
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
    } else {
    console.log('Ninguem marcou ponto!')
}
*/

//if ternario
/*
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos'): 
console.log('Jogadores Invalidos!');

//usando if
if (jogador1 > 0 && jogador2 ==0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
    //usando else if
    } else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
    //usando else
    } else {
    console.log('Ninguem marcou ponto!')
}

// switch/case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!')
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou!')
        break;
        default:
            console.log('Ninguem ganhou!')

}

//lacos de repeticao
//for
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2',  propriedade3: 'valor3'}

//for executa uma instrucao ate que ela seja falsa
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//for in executa repeticao a partir de uma propriedade com array
for (let i in array) {
    console.log(i);
}

//for in executa repeticao a partir de uma propriedade com object
for (let i in object) {
    console.log(i);
}


//for off executa repeticao a partir de uma propriedade com object
for (let i of array) {
    console.log(i);
}
*/

//While
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);

