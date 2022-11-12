//Ejercicio 1
/*Escribe un programa que invierta una cadena usando recursión.Dada la
cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf"
*/

var Palabra = prompt("Digite una palabra")
function invertir(let) {
  if (let === '') {
    return '';
  } else {
    return invertir(let.substr(1)) + let.charAt(0);
  }
}

console.log(invertir(Palabra))


//Ejercicio 2
/*Escribe un programa que devuelva el número de veces que aparece una
letra en una cadena.Tu programa debería recibir una cadena y la letra.
*/

function contar() {
  const texto = document.getElementById('texto').
    value.trim().toLowerCase().split('');
  const repeticiones = {};
  texto.forEach((letra) => {
    repeticiones[letra] = (repeticiones[letra] || 0) + 1;
  });
  for (let letra in repeticiones) {
    const text = `${letra} = ${repeticiones[letra]}`;
    console.log(text)
  }
}


//Ejercicio 3
/*Escriba un programa que reciba una frase y este debe de intercambiar las
vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”*/

const remplazar = {
  a: 'i', e: 'i', i: 'i', o: 'i', u: 'i',
  A: 'I', E: 'I', I: 'I', O: 'I', U: 'I'
}

const cambiarVocales = (String) => {
  return String.renplace(/[]/gi, match => remplazar [match] )
}
console.log(cambiarVocales('esta es la entrada'));







//Ejercicio 4 
/*Escriba un programa que reciba una palabra y reordene sus letras en orden
alfabético.Ej.hola → ahlo
*/


function order_alfabeto(String);
{
  return String.split('').sort().join('');
}
console.log(order_alfabeto('hola'));
