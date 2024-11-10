import { calculateSumHelper } from "./sum.js";

// Esperar hasta que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario y agregar un manejador de eventos para el envío
  document
    .getElementById("sumForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar el envío tradicional del formulario

      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      const sum = calculateSumHelper(num1, num2);
      document.getElementById("result").innerText = "Resultado: " + sum;
    });
});
