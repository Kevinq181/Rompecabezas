//Programacion de JavaScript
//Obtención de imagenes(piezas) del .html
var piezas = document.getElementsByClassName('movil');

//Asignación del tamaño a cada una de las 9 piezas  
var tamWidh = [167, 265, 165, 304.5, 162.5, 305.5, 167, 456, 165];
var tamHeight = [304, 409.5, 300, 171.5, 477.5, 171, 304, 162.1, 300];
//Asignación del atributos a las piezas: tamaño, posición inicial, evento de seleccionar 
for (var i = 0; i < piezas.length; i++) {
    piezas[i].setAttribute("width", tamWidh[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    //Definición espacial de forma aleatoria
    piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
    piezas[i].setAttribute("y", Math.floor((Math.random() * 200) + 1));
    //Evento para clickear imagenes que ejecuta la función seleccionarElemento
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
    //Transferencia de la función reordenar
    elementSelect = reordenar(evt);
    //Variables para guardar la posición del mouse
    currentX = evt.clientX;
    currentY = evt.clientY;
    //Obtención de las posiciones x,y de cada pieza
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    //Evento para mover cada pieza onmousemove que ejecutra la función moverlElemento
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {
    //Obtención del recorrido de las piezas de x,y
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    //Asignación de la distancia recorrida por el mouse 
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    //Actualización de las posiciones del elemento(piezas)
    elementSelect.setAttribute("x", currentPosx);
    elementSelect.setAttribute("y", currentPosy);
    //Guardar la nueva posición del mouse
    currentX = evt.clientX;
    currentY = evt.clientY;
    //Eventos para deseleccionar las piezas, oumouseout y onmouseup que ejecutan la funcion deseleccionarElemento
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    //Función iman
    iman();
}

function deseleccionarElemento(evt) {
    //Ejecutar funcion testing
    testing();
    //Si alguna pieza tiene un atributo asignado se van a remover los atributos para deseleccionar elemento
    if (elementSelect != 0) {
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }

}
//Obtener el entorno del .html
var entorno = document.getElementById('entorno');

function reordenar(evt) {
    //Guardar en la variable padre el elemento contenedor de la pieza seleccionada
    var padre = evt.target.parentNode;
    //Copia de variable padre
    var clone = padre.cloneNode(true);
    //Seleccionar id del elemento padre
    var id = padre.getAttribute("id");
    //Remover del entorno la pieza seleccionada
    entorno.removeChild(document.getElementById(id));
    //Crear la copia creada en el entorno
    entorno.appendChild(clone);
    //Retornar nuevo elemento para ser seleccionado
    return entorno.lastChild.firstChild;
}


//Posiciones en las que las piezas estan correctamente ubicadas
var origX = [202, 318, 533.5, 158.5, 370, 438.5, 202, 223, 533.5];
var origY = [-12, -92, -10.5, 194.5, 41.5, 195, 270, 367.5, 272];

//Funcion de iman para mejorar la interaccion
function iman() {
    //For para asignarle a cada pieza los atributos
    for (var i = 0; i < piezas.length; i++) {
        //Si la posicion que asignamos en x, y esta cercana a 15 pixeles la pieza se ajustará a las posiciones correctas
        if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

//Obtener sonido de ganar
var win = document.getElementById("win");
//Obtener sonido de correcto
var correcta = document.getElementById("correcta");
//Obtener sonido de incorrecto
var incorrecta = document.getElementById("incorrecta");
//Obtener elemento para mostrar mensaje en pantalla de correcto o incorrecto
var mensaje = document.getElementById("escritura");


function testing() {
    var bien_ubicada = 0;
    //Obtener todos los elementos de la clase padre
    var padres = document.getElementsByClassName('padre');
    for (var i = 0; i < piezas.length; i++) {
        //Obtener la ultima posición de las piezas
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        //Obtener las piezas de acuerdo al indice inicial
        ide = padres[i].getAttribute("id");
        //Comparar si la posicion correcta dentro del entorno es igual a la posicion actual  
        if (origX[ide] == posx && origY[ide] == posy) {
            //Si es igual se aumenta un contador de piezas correctas
            bien_ubicada = bien_ubicada + 1;
            //Mostar mensaje
            mensaje.innerHTML = "¡Pieza Correcta!";
            //Reproducir sonido de pieza correcta
            correcta.play();
            //Pausar sonido de pieza incorrecta
            incorrecta.pause();

        } else {
            //De lo contrario mostrar mensaje de intentalo de nuevo
            mensaje.innerHTML = "¡Intentalo <br> <t>de <br> nuevo!";
            //Reproducir sonido de pieza incorrecta
            incorrecta.play();
            //Pausar sonido de pieza correcta
            correcta.pause();
        }

    }
    //Si el contador tiene el valor de 9 es decir que todas las piezas estan en la ubicacion correcta
    if (bien_ubicada == 9) {
        //Reproducir sonido de ganar
        win.play();
        //Mostrar pantalla de ganar desde archivo resultados.js
        ocultarNivel();

    }
}