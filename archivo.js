const opciones = {
	matematicas:{
		default:0,
		alias:'m'
	},
	ingles:{
		default:0,
		alias:'i'
	},
	programcion:{
		demand:true,
		alias:'p'
	}
}
const argv = require('yargs').command('promedio','Calcular Promedio', opciones).argv;

console.log(argv.nombre);
console.log(argv);
console.log('El promedio de '+argv.nombre+' es: '+(argv.m+argv.i+argv.p)/3);