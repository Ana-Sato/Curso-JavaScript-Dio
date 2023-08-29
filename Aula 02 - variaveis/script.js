//Tipos Primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

//Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = 'Ana';
console.log(typeof(nome));

// Function
var funcao = function() {}
console.log(typeof(funcao));

// como declarar 
var variavel = 'Ana';
variavel = 'Martine';
console.log(variavel);

let variavel2 = 'Ana';
variavel2 = 'Martine';
console.log(variavel2);

/*nao pode ser alterada*/
const constante = 'Ana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuicao
var atribuicao = 'Ana';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao); 

//comparacao identica, compara tipo
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadores Relacionais

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 5 >= 6;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 6;
console.log(menorOuIgual);

//Operadores Logicos

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);

