/*
Escribe una función llamada "addArrayProperty(obj, key, array)".

Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva propiedad 
sobre el objeto en la clave dada, con su valor establecido en el array dado.

Ejemplo de entrada:
*/

let myObj = {};
let myStr = 'myProperty';
let myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myArray.push(4, 5));


const addArrayProperty = (obj, key, arr) => {
  return myArray.push(4,5);
}
console.log(myArray);
 //addArrayProperty (obj, key, arr) => {
  //};


/* Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene 
y retornarlo.

Ejemplo:

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput); // -> 2*/

const objectPropertiesCounter = {
  name: 'John', 
  lastname: 'Doe' 
};

let output = Object.keys(objectPropertiesCounter).length;
console.log(output);
console.log(Object.keys(objectPropertiesCounter));


/*Escribe una función llamada "removeStringValuesLongerThan".
Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el 
objeto dado cuyos valores son cadenas de texto más largas que el número dado.

Ejemplo de entrada:

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }*/

/*
let obj = {
   name: 'Montana',
   age: 20,
   location: 'Texas'
  };
let num = 6;
let xx = Object.keys;
let yy = Object.length;
let strB = "";
  const removeStringValuesLongerThan = (num, obj) => {
     for (let i = 0; i < obj.keys.length; i++);{
     if (obj.keys.length > num);
     delete strB;
   }
     
   }
  

  console.log(removeStringValuesLongerThan);
*/

// 3.- removeStringValuesLongerThan

// (6,{ 'name': 'Montana','age': 20, 'location': 'Texas'}) 
// (elimina cualquier propiedad cuyos valores son cadenas más largas que el número dado)

const removeStringValuesLongerThan = (num, obj) => {
  const arrValues = Object.values(obj);
  const arrKey = Object.keys(obj);
  for (i = 0; arrValues.length > i; i++) {
    let stringValues = arrValues[i];
    let stringKey = arrKey[i];
    if (stringValues.length > num) {
      delete obj[stringKey];
    };
  }
  return obj;
};
console.log('removeStringValuesLongerThan', removeStringValuesLongerThan(6, { 'name': 'Montana', 'age': 20, 'location': 'Texas' }));


/* Escriba una función llamada getElementOfArrayProperty.

Dado un objeto, una clave y un índice numérico, getElementOfArrayProperty 
devuelve el valor del elemento en el índice dado del arreglo localizado dentro del objeto
 dado en la clave dada.

Notas:

Si el arreglo está vacío, debería devolver undefined.
Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined.
Si la propiedad en la clave dada no es un arreglo, debería devolver undefined.
Si no hay ninguna propiedad en la clave, debería devolverse undefined.
Ejemplo de entrada:

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'*/
// 4.- getElementOfArrayProperty

// ({ 'key': ['Jamil', 'Albrey'] }, 'key', 0 ) --> 'Jamil' (obtener objeto desde propiedad en un indice)

let obj = {
  key: ['Jamil', 'Albrey']
};
const getElementOfArrayProperty = (obj, key, index) => {
  if ( obj[key] === " " && Array.isArray === false ) {
    return undefined;
  }
  
}
let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output);  


/*

*/