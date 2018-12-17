

function ocultarNivel2(){
	document.getElementById("contenedor").style.display = "none";
	$("#completado").fadeIn(1000);
	mensaje01();
	mensaje02();
	setTimeout(function(){degradado()}, 3000);
	
	//document.getElementById("completado").style.display= "none";
}

function degradado(){
	$("#mensaje01").fadeOut(3000);
	//$("#completado1").fadeOut(10000);
}

function inicial(){
	location.href="../index.html";;
	
}

function mensaje01(){
	var mensajeCompletado = document.getElementById("mensaje01");
	mensajeCompletado.innerHTML = "¡Completado!";
}


function mensaje02(){
	var mensaje02 = document.getElementById("mensaje02");
	mensaje02.innerHTML = "Su tiempo= " + total_minutos + ":" + total_segundos;
}

function instrucciones(){
	var instrucciones = document.getElementById("instrucciones");
	

}
