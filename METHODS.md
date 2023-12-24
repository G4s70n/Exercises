# ARRAY METHODS

### Math.max(...arr) - Math.min(...arr)


```javascript
const arr = [3, 7, 2, 9, 1];
console.log(Math.max(...arr)); // Output: 9
```


# STRING METHODS

### Match()

```javascript
const texto = "Hello World!";
const coincidencias = texto.match(/[aeiou]/gi);// Encuentra todas las vocales, 'i' para coincidencias sin distinguir mayúsculas y minúsculas, 'g' para buscar todas las ocurrencias, '^' para negar /[^a-t] (devuelve todas las coindidencias que no sean letras de la 'a' a la 't').

console.log(coincidencias); // Output: ['e', 'o', 'o']
```