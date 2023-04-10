const calcular = (form) =>{
	if(form.sexo.value.toLowerCase() === "hombre"){
		const masaCorp = eval(50+((form.altura.value-150)/4)*3 + (form.edad.value - 20)/4);
		form.resultado.value=masaCorp;
	}
	if(form.sexo.value.toLowerCase() === "mujer"){
		const masaCorp = eval(50+((form.altura.value-150)/4)*3 + (form.edad.value - 20)*0.9);
		form.resultado.value=masaCorp;
	}
	else
		alert("No ha introducido el género (hombre o mujer)");	
};