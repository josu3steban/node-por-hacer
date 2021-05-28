const argv = require('yargs')
.command('crear', `Crea un nuevo elemento "Por hacer"`, {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
})
.command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: false,
        desc: 'Estado de la tarea'
    }
})
.command('eliminar', 'Elimina una tarea', {
    
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },

})
.help()
.argv;

module.exports = {
    argv
}