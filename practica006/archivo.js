const colors = require('colors');
const fs = require("fs");
let crear = (data)=>{
    fs.writeFile('data.json',
    JSON.stringfy(data, undefined, 2),
    (err) => {
    if(err){
        console.log(err.red);
    }else {
        console.log("Se creo el archivo con data");
    }
    });
}

let cargarArchivo = ()=>{
    try{
        return require('./data.json');
    } catch (err){
        return {alumnos: []};
    }
}

let agregarAlumno = (alumno) =>{
    let archivo = cargarArchivo();
    archivo.alumnos.push(alumno);
    crear(archivo);
    console.log("Se ha creado el alumno" +"${alumno}".yellow);
}

module.exports ={
    crear,
    agregarAlumno
}