const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch( comando ) {

    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();

        if(listado.length) {

            for( let tareas of listado ) {
                console.log('==========Por hacer=========='.green);
                console.log(tareas.desc);
                console.log('Estado: ', tareas.completado);
                console.log('-----------------------------'.red);
            }
            
        }
        else {

            console.log('El listado POR HACER está vacío');
            
        }
    break;

    case 'actualizar':

        porHacer.actualizar( argv.descripcion, argv.completado );

    break;

    case 'eliminar':

        porHacer.eliminar( argv.descripcion );

    break;

    default:
        console.log('Comando ingresado no reconocido');
}

/**
 * git status       //--Ver estado de los archivos
 * git add .        //--Añade todos los elementos del repositorio seleccionado (directorio - carpeta)
 * git commit -m    //--"Guarda" los elementos
 * git push         //--Sube a github
 */