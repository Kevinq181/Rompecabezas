
function empezar(){

	segundos = 0;
	minutos = 0;
	s = document.getElementById('segundos');
	m = document.getElementById('minutos');

	cronometro = setInterval(function(){
		segundos++;
		auxs= segundos;
		auxm = minutos;

		while(auxs>=60){
			auxm++;
			auxs-=60;
		}

		if (auxm<10) {
			m.innerHTML = '0'+ auxm;
			var1 = '0'+ auxm;
		}else{
			m.innerHTML = auxm;
			var1 = auxm;
		}
			
		
		if (auxs<10) {
			var2 = '0' + auxs;
			s.innerHTML = '0' + auxs;
		}else{ 
			s.innerHTML = auxs;
			var2 = auxs;
		}
		
		total_segundos = var2;
		total_minutos = var1;

	},1000);

}




