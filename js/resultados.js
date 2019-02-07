//Funcion para ocultar el contenedor de las piezas y los demás elementos del .html
function ocultarNivel(){
	document.getElementById("contenedor").style.display = "none";
    //Apertura con animacion fadeIn del elemento del .html 
	$("#completado").fadeIn(1000);
    //Llamado a funciones
	mensaje01();
	mensaje02();
    //Animacion de desvanecer en un tiempo de 3 segundos
	setTimeout(function(){desvanecer()}, 3000);
}

function desvanecer(){
    //Animacion de fadeOut para mensaje01
	$("#mensaje01").fadeOut(3000);
}
//Función para agregar el mensaje de completado en .html
function mensaje01(){
	var mensajeCompletado = document.getElementById("mensaje01");
	mensajeCompletado.innerHTML = "¡Completado!";
}
//Función para agregar el tiempo en .html
function mensaje02(){
	var mensaje02 = document.getElementById("mensaje02");
	mensaje02.innerHTML = "Su tiempo= " + total_minutos + ":" + total_segundos;
}