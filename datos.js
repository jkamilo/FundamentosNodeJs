
/*const estudiante1 = require('./calculos');

console.log(estudiante1.estudiante);

console.log('El promedio del estudiante '+
	estudiante1.estudiante.nombre+' es: '+
	estudiante1.obtenerPromedio(
		estudiante1.estudiante.notas.matematicas,
		estudiante1.estudiante.notas.ingles,
		estudiante1.estudiante.notas.programacion));
*/
//Destructuración
const {estudiante,obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log(estudiante);

console.log('El promedio del estudiante '+
	estudiante.nombre+' es: '+
	obtenerPromedio(
		estudiante.notas.matematicas,
		estudiante.notas.ingles,
		estudiante.notas.programacion));

//Destructuración
let {nombre, edad : anios, notas:{matematicas, ingles, programacion}} = estudiante;

console.log('Estudiante '+nombre+' Años: '+anios);
console.log('El promedio del estudiante '+
	nombre+' es: '+
	obtenerPromedio(matematicas,ingles,programacion));

let crearArchivo =() =>{
	texto = 'El nombre del estudiante es: ' + nombre +'\n'+
	'Materias y Notas: ' + '\n' +
	'Matemaricas: ' + matematicas +'\n' +
	'Ingles: ' + ingles +'\n' +
	'Programación: ' + programacion +'\n' +
	'ha obtenido un promedio de: '+obtenerPromedio(matematicas,ingles,programacion);
	fs.writeFile('promedio.txt', texto, (err)=>{
		if(err) throw (err);
		console.log('Se ha creado el archivo.');
	});
}

crearArchivo();