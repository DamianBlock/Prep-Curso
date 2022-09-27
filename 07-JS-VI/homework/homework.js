// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // existe un metodo llamado ToUpperCasse() que se encargar de transformar un caracter de minúscula a mayúscula

  return nombre[0].toUpperCase() + nombre.slice(1);
  //    m a r i o
  //    0 1 2 3 4
  //    slice(1)  muestra el string a partir del indice 1 en adelanete sin limites.
}
function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  //  callback es una función que recibe un argumento, cuyo argumento no es más que otra función que proviene de afuera y actúa sobre la función actual.

  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1,n2);


}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  // reduce(acumulador,elemento) es como un for, recorre todos los elementos de un número y los va sumando en un acumulador

  var sumaReduce = numeros.reduce(function(ac,ele){ return ac + ele;});
  cb(sumaReduce);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  // forEach el primer argumento que recibe es un elemento, en este ejercicio lo que hace el forEach es para cada uno de los elementos del array
  // los está usando como argumento de un call back que está recibiendo la función mayor.

  array.forEach(function(ele, ){cb(ele)});
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var arrayNuevo = array.map(function(ele){
    return cb(ele)
  })
  return arrayNuevo; 
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  //array ["Ariel", "Jorge", "Ana", "Lucia", "Agustina"]

  return array.filter(function(ele){
    return ele[0] === "a";
    // return array.filter(function(ele){
    //  if(str[0] === "a") {
    //      return str;    }  esta opción también debería funcionar.
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
