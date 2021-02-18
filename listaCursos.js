let { cursos } = require("./objetoCursos");

let imprimir_cursos = () => {
    let cont = 1;
    for (let i = 0; i < cursos.length; i++) {
        cont = cont + 1;
        setTimeout(() => {
            console.log(`
        ID del curso ${cursos[i].id}
        Nombre del curso: ${cursos[i].nombreCurso}
        Precio: ${cursos[i].precio} pesos
        Duracion: ${cursos[i].duracion}
    `);
        }, 2000 * cont);
    }
};


imprimir_cursos();

module.exports = {
    imprimir_cursos
};