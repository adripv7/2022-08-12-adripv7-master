
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá

  var generalArray = []

for (let key in obj) {
generalArray.push(obj[key])
}
for (let key2 in array) {
generalArray.push(array[key2])
}

      for (var i = 0; i < generalArray.length  ; i++) {
        for(var j = 0 ; j < generalArray.length - i - 1; j++){
        if (generalArray[j] > generalArray[j + 1]) {
          var auxiliar = generalArray[j];
          generalArray[j] = generalArray[j+1];
          generalArray[j + 1] = auxiliar;
        }
       }
      }
      return generalArray

}
  

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
