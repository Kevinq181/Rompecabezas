

function nivel1(){
	iniciar();
	$("#contenedor").toggle(1000);
	document.getElementById("inicial").style.display= "none";
}

function ocultarNivel1(){
	document.getElementById("contenedor").style.display = "none";
	$("#completado").fadeIn(1000);
	mensaje01();
	setTimeout(function(){degradado()}, 5000);
	
	//document.getElementById("completado").style.display= "none";
}

function degradado(){
	$("#mensaje01").fadeOut(3000);
	//$("#completado1").fadeOut(10000);
}

function inicial(){
	$("#inicial").fadeIn(1000);
	document.getElementById("completado").style.display= "none";
}

function mensaje01(){
	var mensajeCompletado = document.getElementById("mensaje01");
	mensajeCompletado.innerHTML = "¡Completado!";
}
