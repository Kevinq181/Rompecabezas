
function resetear(){
	clearInteval(cronometro);

}

function empezar(){

	segundos = 0;
	s = document.getElementById('segundos');
	m = document.getElementById('minutos');

	cronometro = setInterval(function(){
		segundos++;
		auxs= segundos;
		auxm = 0;

		while(auxs>=60){
			auxm++;
			auxs-=60;
		}

		if (auxm<10) m.innerHTML = '0'+auxm;
		else m.innerHTML = auxm;

		if (auxs<10) s.innerHTML = "0" + auxs;
		else s.innerHTML = auxs;

		total_segundos = auxs;
		total_minutos = auxm;

	},1000);

}





