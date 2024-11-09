// Importa la función calculateSum si está en un módulo (descomentar en caso de ser necesario)
// const { calculateSum } = require('./script');

// Función auxiliar para realizar la suma sin el evento
function calculateSumHelper(num1, num2) {
  return num1 + num2;
}

// Pruebas para la función de suma
function runTests() {
  console.log("Iniciando pruebas de la función de suma...");

  // Test 1: Suma de números positivos
  console.assert(
    calculateSumHelper(3, 5) === 8,
    "Test 1 Fallido: La suma de 3 y 5 debería ser 8",
  );

  // Test 2: Suma de un número positivo y un número negativo
  console.assert(
    calculateSumHelper(10, -3) === 7,
    "Test 2 Fallido: La suma de 10 y -3 debería ser 7",
  );

  // Test 3: Suma de números negativos
  console.assert(
    calculateSumHelper(-4, -6) === -10,
    "Test 3 Fallido: La suma de -4 y -6 debería ser -10",
  );

  // Test 4: Suma de un número y cero
  console.assert(
    calculateSumHelper(0, 5) === 5,
    "Test 4 Fallido: La suma de 0 y 5 debería ser 5",
  );

  // Test 5: Suma de ceros
  console.assert(
    calculateSumHelper(0, 0) === 0,
    "Test 5 Fallido: La suma de 0 y 0 debería ser 0",
  );

  console.log("Todas las pruebas han finalizado.");
}

// Ejecuta las pruebas
runTests();
