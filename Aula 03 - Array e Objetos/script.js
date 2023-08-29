// O que sao vetores ou arrays

// como declarar um array
/*
let array = ['string', 1, true];
console.log(array);

//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['arrey2'], ['array3'], ['array4']];
console.log(array[0]);

//Manipulando arrays
//forEach
array.forEach(function(item,index){console.log(item,index)})

//push
array.push('novo item');
console.log(array)

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item no incio');
console.log(array);

//indexOff
console.log(array.indexOf(true));

//splice
array.splice(0,3);
console.log(array);

//slice
array.slice(0,3);
console.log(array);
*/

//Objetos
let object = {string:'string', number:1, boolean: true, array:["array"], objectInterno:{objectInterno:'objeto interno'}};

console.log(object);

console.log(object.array);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {strig, boolean, objectInterno} = object;
console.log(string, boolean,objectInterno);



