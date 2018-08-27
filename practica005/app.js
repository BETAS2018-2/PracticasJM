//Promesas
//La promesas son asincronas y se tienen que cumplir.


//Se maneja para los errores.
let suma = (a, b) =>{ //Funcion principal
    return new Promise((resolve, reject)=>{ //Promesa
        if(!Number(a)){
            reject("No es un número");
        }else{
            resolve(a + b);
        }
    });
}

//Se usa "AWAIT" para 
let operacion = async(a,b) =>{
    var res = await suma(a,b);
    res = await resta (res, a);
    console.log(res);
}

let resta = async(a,b) =>{
    return a - b;
}

operacion(10,10);

// console.log(resta(10,9));

// console.log(suma());
// suma('a',2)
//     .then((res)=>{
//         console.log(res);
// })
//     .catch((err)=>{
//         console.log(err);
// });