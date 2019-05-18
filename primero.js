function promedio(nota1, nota2, nota3){
	let resultado = (nota1+nota2+nota3)/3;
	console.log('El promedio es: '+resultado);
}

let promedio2=(nota1, nota2, nota3)=>{
	setTimeout(function() {
	let resultado = (nota1+nota2+nota3)/3;
	console.log('El promedio2 es: '+resultado);
},2000);
}

let promedio3 = (nota1, nota2, nota3) => console.log('El promedio3 es: '+(nota1+nota2+nota3)/3);

let promedioCallBack=(nota1, nota2, nota3, callback)=>{
	setTimeout(function() {
		let resultado = (nota1+nota2+nota3)/3;
		callback(resultado);
	},0);
}

promedio(4,4,3);
promedio2(4,4,3);
promedio3(4,4,3);

promedioCallBack(4,4,3,function(resultado){
	console.log('El promedioCallBack es: '+resultado);
})