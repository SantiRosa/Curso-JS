const numeroParoImpar = [7,2 ,9 ,98 ,3 ,56 ,23 ,47 ,22 ,26 ,38 ,100 ,91 ,66 ,85];
for (let i = 0; i < 15; i++) {
    const resultado = numeroParoImpar[i]%2;
    if (resultado === 0) {
        console.log(`este numero es par ${numeroParoImpar[i]}`);}
    else{
        console.log(`este numero es impar${numeroParoImpar[i]}`)}
    }
