var total_segundos;
var total_minutos;
var cronometro;

//Funcion para iniciar el cronometro dentro de cada imagen de los niveles presentados
function empezar() {

    segundos = 0;
    minutos = 0;
    //Variable para obtener el elemento(<span>) segundos del archivo que lo utiliza (.html)
    s = document.getElementById('segundos');
    //Variable para obtener el elemento (<span>) minutos del archivo que lo utiliza (.html)
    m = document.getElementById('minutos');

    //Forma para establecer un intervalo a una funcion
    cronometro = setInterval(function () {
        //Contador de segundos
        segundos++;
        //Variables auxiliares para contar minutos y segundos
        auxs = segundos;
        auxm = minutos;

        while (auxs >= 60) {
            auxm++;
            auxs -= 60;
        }
        //Presentación continua de los minutos del cronómetro en el .html segun la etiqueta obtenida en la variable auxm
        if (auxm < 10) {
            m.innerHTML = '0' + auxm;
            var1 = '0' + auxm;
        } else {
            m.innerHTML = auxm;
            var1 = auxm;
        }

        //Presentación continua de los segundos del cronómetro en el .html segun la etiqueta obtenida en la variable auxs
        if (auxs < 10) {
            var2 = '0' + auxs;
            s.innerHTML = '0' + auxs;
        } else {
            s.innerHTML = auxs;
            var2 = auxs;
        }
        //Variables para obtener el tiempo total del cronómetro
        total_segundos = var2;
        total_minutos = var1;

    }, 1000); //Tiempo establecido en milisegundos
}
