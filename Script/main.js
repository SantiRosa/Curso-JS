// const edad = 18;
// const condiction = (edad < 18);

// if ( condiction ) {
//     console.log("te logueaste correctamente");
//     console.log("felicitaciones, te ganaste un cupon");
// }

// for (let i = 0; i < 33; i++) {
//     console.log(i);
//     const resultado = i%2;
//     if (resultado === 0) {
//         console.log(`este numero es par ${i}`);
//     }
//     else if (resultado !== 0){
//         console.log(`puto el que lee`)
//     } //

const numeroParoImpar = [7,2 ,9 ,98 ,3 ,56 ,23 ,47 ,22 ,26 ,38 ,100 ,91 ,66 ,85];
for (let i = 0; i < 15; i++) {
    const resultado = numeroParoImpar[i]%2;
    if (resultado === 0) {
        console.log(`este numero es par ${numeroParoImpar[i]}`);}
    else{
        console.log(`este numero es impar${numeroParoImpar[i]}`)}
    }
