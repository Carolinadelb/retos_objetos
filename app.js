/*Escribe una función llamada "addArrayProperty(obj, key, array)". 
Dado un objeto, una clave y un array, 
"addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado.
Definicion:
En JavaScript, un objecto es un entidad independiente con propiedades y tipos.  */
 

//EJERCICIO 1

var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty);

//retorna 1,3

/* 
let myObj = {};
let myStr = 'myProperty';
let myArray = [1, 3];

addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty);

Pregunta:
¿ Por qué con let no me retorna el 1,3?
(VM239:1 Uncaught SyntaxError: Identifier 'myObj' has already been declared
    at <anonymous>:1:1)
*/

/* Ejercicio 2:

Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene 
y retornarlo.

Ejemplo:

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput); // -> 2*/

const objectPropertiesCounter = {
  name: 'John',
  lastname: 'Doe',
 };
 
 // Para sacar las propiedades (keys)
 /* objects.keys = a las propiedades de los objetos
 (objectPropertiesCounter) = es la constante
 length= recorrido  */
 
 let output = Object.keys(objectPropertiesCounter).length;
 console.log(output); // ve las propiedades y las cuenta
 console.log(Object.keys(objectPropertiesCounter));

/*Ejercicio 3:
Escribe una función llamada "removeStringValuesLongerThan".
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
let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

function removeStringValuesLongerThan (num, obj) {
  for (str in obj){
  	if (typeof(obj[str]) === 'string' && obj[str].length >= num){
  		delete obj[str];
  	}
  }
}


/*Ejercicio 4: Escriba una función llamada getElementOfArrayProperty.

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
  if ( obj[key] && obj[key].length && Array.isArray(obj[key]) && index >= 0 && index < obj[key].length ){
    return undefined;
  }
  
}
console.log(getElementOfArrayProperty);  


/*Ejercicio 5:
Escribe una función llamada greetCustomer.

Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.

El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de cliente):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notas:

Tu función no debe alterar el objeto customerData para actualizar el número de visitas.
No codificar los datos exactos de la muestra. Esto es una mala idea:
if (firstName === 'Joe') {
  // do something
}

*/

const customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

const greetCustomer = (firstName) => {
  var greeting = '';

  for(person in customerData){

      if (person === firstName){

        if(customerData[person].visits === 1){
          greeting = "Bienvenido nuevamente " + person + " Estamos felicies que te hayamos gustado la primera vez";
        }else if(customerData[person].visits > 1){
          greeting = "Bienvenido nuevamente, " + person + " Estamos felices de verte nuevamente";
        }
        return greeting;
      }else {
        greeting = "Bienvenido! vienes por primera vez?";
      }
  }
	
  return greeting;
}


console.log(greetCustomer('Howard'));
console.log(greetCustomer('Carol'));
console.log(greetCustomer('Joe'));
console.log(greetCustomer('Carrie'));

/*Ejercicio 6:
Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

el primer elemento del array como la clave del objeto, y
el último elemento del array como valor de esa clave.
Ejemplo de entrada:

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Valor de retorno de la función (salida):

{
  Queen: 'Beyonce'
}
No cambie el array de entrada. Suponga que todos los elementos del array de entrada serán del tipo string.

Tenga en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
Valor de retorno de la función (salida):

{
  Kevin: "Spacey"
}


*/

transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);

function transformFirstAndLast(array) {
  
  var first = [array[0]];
  var last = array[array.length-1] // .length-1 cuenta de derecha hacia izquierda y como es -1 contara la última posición
  //console.log(first);
  //console.log(last);
  
  var myObject = {};
  myObject[first] = last; 
  return myObject; 
  
}
// retorna : {Queen: "Beyonce"}

/*Ejercicio: 7
Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Sam',
  age: 25,
  hasPets: true
}
Valor de retorno de la función (salida):

['name', 'age', 'hasPets']
Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto pasado en ella.

P.ej. también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 'number', 'hungry', 'grammyWins']
*/

let obj ={
  'name': 'Sam',
  'age': 25,
  'hasPets': true
};
console.log(Object.keys(obj));

let getAllKeys = (obj) => {
  let result=[ ];
  for (let key in obj){
    result.push(key);
  }
  return result;
}

console.log(getAllKeys(obj));

/*Ejercicio 8:
Escribir una función fromListToObject que toma un array de matrices, y devuelve un objeto con cada par de elementos en la array como un par clave-valor.

Ejemplo de entrada:

[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
Valor de retorno de la función (salida):

{
  make: 'Ford'
  model: 'Mustang',
  year: 1964
}
No cambie la cadena de entrada. Suponga que todos los elementos del array serán del tipo string.

Tenga en cuenta que la entrada puede tener un número diferente de elementos que la muestra dada. Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu código debería adaptarse de manera flexible. */

input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
const fromListToObject = (array) => {
 Object = {}
  for(var i = 0; i < array.length;i++){
    let newArray = array[i];
    Object[newArray[0]] = newArray[1]
  }
return Object;
}
let output = fromListToObject(input);
console.log(output);

/*Ejercicio 9:
Escribe una función llamada listAllValues que devuelve un array de todos los valores del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Krysten',
  age: 33,
  hasPets: false
}
Valor de retorno de la función (salida):

['Krysten', 33, false]
Tenga en cuenta que la entrada puede tener un número diferente de claves y valores que la muestra dada. Por ejemplo, también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 11, true, 1]
 */
let persons =
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

const listAllValues = (obj) => {

  let result = [];
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { //El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
      result.push(obj[key]);
    }
  }
    return result;
  }
  listAllValues(persons);

  /*Ejercio 10:
  Escribir una función llamada "transformEmployeeData" que transforma algunos datos de los empleados de un formato a otro.

El argumento se verá así:

[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
Dado que la entrada, el valor devuelto debe verse como esto:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
Tenga en cuenta que la entrada puede tener un número diferente de filas o claves diferentes de la muestra dada.

Por ejemplo, digamos que el departamento de recursos humanos agrega un campo "tshirtSize" a cada registro de empleado. Su código debería acomodarse de manera flexible. */

//NO SE PUDO

/*Ejercicio 11:
Escribir una función llamada "convertObjectToList" que convierte un objeto literal en una array de arrays, como esto:

Argumento:

{
  name: 'Holly',
  edad: 35,
  papel: 'productor'
}
Valor de retorno:

[['name', 'Holly'], ['edad', 35], ['rol', 'productor']]
Tenga en cuenta que su función debe ser capaz de manejar cualquier objeto como este, no sólo la muestra exacta proporcionada anteriormente.

Por ejemplo, también debería ser capaz de manejar esto, o cualquier otro objeto que contiene pares clave-valor simples.

{
  species: 'canino',
  name: 'Bowser',
  weight: 45
}
*/

let holly = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};


const convertObjectToList = (obj) => {
  let outer = [];
  
  for(var prop in obj){
    let inner = [];
    inner.push(prop);
    inner.push(obj[prop]);
    outer.push(inner);
  }
  return outer;
}

console.log(convertObjectToList(holly));

/*Ejercicio 12:
Escriba una función llamada "getSumOfAllElementsAtProperty".

Dado un objeto y una key, "getSumOfAllElementsAtProperty" devuelve la suma de todos los elementos del array.

Notas:

Si el array está vacío, debe devolver 0.
Si la propiedad en la key dada no es un array, debe devolver 0.
Si no hay ninguna propiedad en la key dada, debe devolver 0. */


let obj = {
  key: [4, 1, 8]
};


const getSumOfAllElementsAtProperty = (obj, key) => {
  let sum = 0;
  if ( Array.isArray(obj[key]) === false || obj[key].length < 1 ) {//para saber si no es un array se pone metodo array.isarray ===false
    return 0; //retornara 0 porque esta false, y si es menor a 1
  }

  for ( let element in obj[key] ) {
    sum += obj[key][element]; //+= agrega la suma a la variable 
  }
  return sum;
}

let output = getSumOfAllElementsAtProperty(obj,'key');
console.log(output);

/*Ejercicio 13:
Escriba una función llamada getProductOfAllElementsAtProperty.

Dado un objeto y una key, getProductOfAllElementsAtProperty devuelve el producto de todos los elementos del array.

Notas:

Si el array está vacío, debe devolver 0.
Si la propiedad en la key dada no es un array, debe devolver 0.
Si no hay ninguna propiedad en la key dada, debe devolver 0. */

let obj = {
  key: [1, 2, 3, 4]
};

const getProductOfAllElementsAtProperty = (obj, key) => {
  
  if ( obj[key] === undefined || !(Array.isArray(obj[key])) || obj[key].length < 1) {
    return 0;
  }
  
  let product = 1;
//pero itera sobre los valores de las propiedades del objeto,
// en vez de sobre los mismos nombres de las propiedades.   
  for( let probando in obj[key] ) {
    product *= obj[key][probando];
  }
  return product;
}

let output = getProductOfAllElementsAtProperty(obj,'key');
console.log(output);

/*Ejercicio 15: 
Dado dos objetos y una clave, "addObjectProperty" establece una nueva propiedad 
en el primer objeto en la clave dada. El valor de esta nueva propiedad es el segundo objeto completo.
*/

let person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

const addObjectProperty = (p1, key, p2) => {
  p1[key] = p2; //use this notation. obj1.key doesn't pass manager, but passes 'key'.
  return p1;
}
let output = addObjectProperty(person1, 'manager', person2);
console.log(output);

/* Ejercicio 16: 
Escribe una función llamada "addFullNameProperty".

Dado un objeto que tiene una propiedad "firstName" y una propiedad "lastName", "addFullNameProperty"
 devuelve una propiedad "fullName" cuyo valor es una cadena con el nombre y el apellido separados por un espacio.
 */

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

const addFullNameProperty = (obj) => {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
  return obj.fullName;
}

addFullNameProperty(person);
console.log(person.fullName);