const fs = require('fs');
const colors = require('colors');

let listarPorHacer= [];


const cargarDB = () => {

    try {
        
        listarPorHacer = require('../db/data.json');

    } catch (error) {
        
        listarPorHacer = [];
        
    }
    
}

const guardarDB = () => {

    let data = JSON.stringify( listarPorHacer );

    fs.writeFile('db/data.json', data, ( err ) => {
        
        if( err ) {

            throw new Error('No se pudo grabar', err);

        }

    });
}

const crear = ( desc ) => {

    cargarDB();

    let porHacer = {
        desc,
        completado: false
    };

    listarPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    
    cargarDB();

    return listarPorHacer;
}

const actualizar = ( desc, estado ) => {

    cargarDB();

    //Devuelve el indice de la posicion del elemento a buscar, si no encuentra nada, devuelve un -1
    let index = listarPorHacer.findIndex( (tarea) => tarea.desc === desc);
    
    if( Boolean( estado ) ) {

        if( index >= 0 ) {
    
            listarPorHacer[index].completado = estado;

            console.log('Actualización exitosa'.green);
            console.log('==========Por hacer=========='.green);
            console.log(listarPorHacer[index].desc);
            console.log('Estado: ', listarPorHacer[index].completado);
            
        }else {

            console.log("Tarea no encontrada");
            
        }

    }else {

        console.log("El ESTADO ingresado no es tipo permitido");
        
    }

    guardarDB();
    
};

const eliminar = ( desc ) => {

    cargarDB();

    let index = listarPorHacer.findIndex( (tarea) => tarea.desc === desc);

    if( index >= 0 ) {

        let nuevoListado = listarPorHacer.filter( (tarea) => tarea.desc !== desc );

        if( listarPorHacer.length === nuevoListado.length ) {

            console.log('Ningún elemento eliminado');

        }else {
            
            listarPorHacer = nuevoListado;
            guardarDB();
            console.log('Elemento eliminado'.green);
            
        }
        
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}