const toJadenCase = require('../exercises/1.js');  // Ajustar la ruta según la ubicación de tu archivo ejercicio.js

test('Convierte una cadena a Jaden Case correctamente', () => {
  const texto = "hola, esta es una cadena de ejemplo";
  const resultado = toJadenCase.call(texto); // Usar call para pasar 'texto' como 'this'
  expect(resultado).toBe("Hola, Esta Es Una Cadena De Ejemplo");
});
