let { cursos } = require('./objetoCursos');


let fs = require('fs');

let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}



let argv = require('yargs')
    .command('inscribir', 'matricular', opciones)
    .argv;



let matricula = () => {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        let mensaje = `El estudiate ${argv.nombre} con cedula ${argv.cedula} esta matriculado en el curso ${cursos[argv.id - 1].nombreCurso} con un precio de ${cursos[argv.id - 1].precio} con una duracion ${cursos[argv.id - 1].duracion}`;
        fs.writeFile('archivoCursos.txt', mensaje, (err) => {
            if (err) throw (err);
            console.log('Esta inscrito correctamente!');
        })

    } else {
        console.log('id invalido, ingrese un nuevo id');
    }
};


matricula();