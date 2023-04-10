const calcular = (form) =>{
	if(form.sexo.value.toLowerCase() === "hombre"){
		const masaCorp = eval(50+((form.altura.value-150)/4)*3 + (form.edad.value - 20)/4);
		form.resultado.value=masaCorp;
	}
	if(form.sexo.value.toLowerCase() === "mujer"){
		const masaCorp = eval(50+((form.altura.value-150)/4)*3 + (form.edad.value - 20)*0.9);
		form.resultado.value=masaCorp;
	}
	if(isNaN(form.edad.value) && isNaN(form.altura.value)){
		alert("La edad y la altura no es un número");
		form.resultado.value="";
	}		
	else if(isNaN(form.edad.value)) {
		alert("La edad no es un número");
		form.resultado.value="";
	}
	else if(isNaN(form.altura.value)) {
		alert("La altura no es un número");
		form.resultado.value="";
	}
	
};