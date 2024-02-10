function measureAverageExecutionTime(func1, func2, args, iterations = 1000) {
    let t0, t1, sum1 = 0, sum2 = 0;
  
    // Medir el tiempo de ejecución promedio de la primera función
    for(let i = 0; i < iterations; i++) {
        t0 = performance.now();
        func1(args);
        t1 = performance.now();
        sum1 += t1 - t0;
    }
    console.log(`Mi función tomó ${(sum1 / iterations).toFixed(2)} milisegundos en promedio.`);
  
    // Medir el tiempo de ejecución promedio de la segunda función
    for(let i = 0; i < iterations; i++) {
        t0 = performance.now();
        func2(args);
        t1 = performance.now();
        sum2 += t1 - t0;
    }
    console.log(' ')
    console.log(`La segunda función tomó ${(sum2 / iterations).toFixed(2)} milisegundos en promedio.`);
}

// PEGAR FUNCIONES:

// 1. 
let a = function order(words) {
    if(words.length === 0) return ''; 
    words = words.split(' ');
    let word = [];

    for(let i = 0; i < words.length; i++){
        let num = words[i].match(/\d+/);
        word[num - 1] = words[i];
    }

    return word.join(' ');
};

// 2. 
let b = function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
};

// EJECUTAR:
let testWords = "4of Fo1r pe6ople g3ood th5e the2";
measureAverageExecutionTime(a, b, testWords, 1000);
