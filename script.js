
$(document).ready(function(){

let turno = 1;
let jugador1 = 0;
let jugador2 = 0;


let uno = $("#c1");
let dos = $("#c2");
let tres = $("#c3");
let cuatro = $("#c4");
let cinco = $("#c5");
let seis = $("#c6");
let siete = $("#c7");
let ocho = $("#c8");
let nueve = $("#c9");



	
	anime({
		targets: '.cuadrado',

		rotate: {
			value: 360,
			duration: 1800,
			easing: 'easeInOutSine'
		}
	  
	  
		})

	


	function ganar(){
			
		if (uno.hasClass('x') && dos.hasClass('x') && tres.hasClass('x')|| 
		 cuatro.hasClass('x') && cinco.hasClass('x') && seis.hasClass('x')|| 
		 siete.hasClass('x') && ocho.hasClass('x') && nueve.hasClass('x')|| 
		 
		 uno.hasClass('x') && cuatro.hasClass('x') && siete.hasClass('x')|| 
		 dos.hasClass('x') && cinco.hasClass('x') && ocho.hasClass('x')|| 
		 tres.hasClass('x') && seis.hasClass('x') && nueve.hasClass('x')||
		 
		 uno.hasClass('x') && cinco.hasClass('x') && nueve.hasClass('x')|| 
		 tres.hasClass('x') && cinco.hasClass('x') && siete.hasClass('x')){
		
			alert("Ha ganado X");
			jugador1++;
			$("#contador1").text(jugador1);
			$(".cuadrado").empty();
			$(".x").removeClass("x");
			$(".o").removeClass("o");

		
		 }else if (uno.hasClass('o') && dos.hasClass('o') && tres.hasClass('o')|| 
		 cuatro.hasClass('o') && cinco.hasClass('o') && seis.hasClass('o')|| 
		 siete.hasClass('o') && ocho.hasClass('o') && nueve.hasClass('o')|| 
		 
		 uno.hasClass('o') && cuatro.hasClass('o') && siete.hasClass('o')|| 
		 dos.hasClass('o') && cinco.hasClass('o') && ocho.hasClass('o')||
		 tres.hasClass('o') && seis.hasClass('o') && nueve.hasClass('o')|| 
		 
		 uno.hasClass('o') && cinco.hasClass('o') && nueve.hasClass('o')||
		 tres.hasClass('o') && cinco.hasClass('o') && siete.hasClass('o')){
		
			alert("Ha ganado O");
			jugador2++;
			$("#contador2").text(jugador2);
			$(".cuadrado").empty();
			$(".x").removeClass("x");
			$(".o").removeClass("o");
			



			
		 }else if(uno.text() && dos.text() && tres.text() && cuatro.text() && cinco.text() && seis.text() && siete.text() && ocho.text() && nueve.text()){
			 
			 alert("Empate");
			 $(".cuadrado").empty();
			$(".x").removeClass("x");
			$(".o").removeClass("o");
			
		 }
		 		 		
		
	}

	
 
	$(".cuadrado").click(function(){
          
		 
		 if(turno === 1 && !$(this).text()){
			 
			 $(this).text("X");
			 $(this).addClass("x"); 

			 turno = 2;
			 
			 ganar();
			 
		 
		 }else if(!$(this).text()){
			 
			 $(this).text("O");
			 $(this).addClass("o"); 

			 turno = 1;
				
			ganar();
		 }
		
		
		 

 });
		  
		  
		  
	$(".boton").click(function(){
		
	
	location.reload();
	

	
	});
	
	
});


