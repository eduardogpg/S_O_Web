var lalo =true;
var contador=1;
var numero_uno=0;
var numero_dos=0;
var resultado = 0;
var opcion=1;
var calculadora= true;
var calculadora_visible=false;

function desktop(){
	var usuario = document.getElementById('usuario');
	size=570;
		var intervalo =setInterval(function(){
		usuario.style.height= size+"px";
		size=size-20;	
	},5);
	setTimeout(function(){clearInterval(intervalo)
		document.getElementById("usuario").style.visibility="hidden";
	},1000);
}

function barra(){
	
	if (lalo==true){
	
	var hidden= 200;
	var barr= document.getElementById('menu');
	barr.style.height= hidden+"px";
	document.getElementById("pa").style.visibility="visible";
	document.getElementById("ga").style.visibility="visible";
	document.getElementById("ti").style.visibility="visible";
	lalo= false;

	}else{
	var hidden= 20;
	var barr= document.getElementById('menu');
	barr.style.height= hidden+"px";
	document.getElementById("pa").style.visibility="hidden";
	document.getElementById("ga").style.visibility="hidden";
	document.getElementById("ti").style.visibility="hidden";
	lalo= true;
	}
}
	
function atras(){

	var imagen_uno = "wal_2.jpg"
	var imagen_dos="wal_3.jpg"
	var imagen_tres="wal_6.jpg"

	switch(contador)
	{
	case 1:
	  document.getElementById('desktop').style.backgroundImage="url("+imagen_tres+")"; 
	contador = 3;
		document.getElementById('me').style.visibility="hidden";
		document.getElementById('rio').style.visibility="hidden";
		document.getElementById('gmail').style.visibility="hidden";			
		document.getElementById('google').style.visibility="hidden";
		document.getElementById('box').style.visibility="hidden";
		document.getElementById('grabar').style.visibility="hidden";
		document.getElementById('twitter').style.visibility="hidden";
		document.getElementById('papelera').style.visibility="hidden";

		document.getElementById('call').style.visibility="visible";
	 	document.getElementById('telefono').style.visibility="visible";
		document.getElementById('msg').style.visibility="visible";
	 	document.getElementById('nintendo').style.visibility="visible";
		document.getElementById('face').style.visibility="visible";
	  break;
	case 2:
		document.getElementById('desktop').style.backgroundImage="url("+imagen_uno+")"; 
		document.getElementById('gmail').style.visibility="visible";			
		document.getElementById('google').style.visibility="visible";
		document.getElementById('box').style.visibility="visible";
		document.getElementById('grabar').style.visibility="visible";
		document.getElementById('twitter').style.visibility="visible";
		document.getElementById('papelera').style.visibility="visible";
		document.getElementById('call').style.visibility="hidden";

	 	document.getElementById('telefono').style.visibility="hidden";
		document.getElementById('msg').style.visibility="hidden";
	 	document.getElementById('nintendo').style.visibility="hidden";
		document.getElementById('face').style.visibility="hidden";	
		document.getElementById('me').style.visibility="hidden";
		document.getElementById('rio').style.visibility="hidden";
		contador = 1;
	  break;
	case 3:
		document.getElementById('desktop').style.backgroundImage="url("+imagen_dos+")"; 
		document.getElementById('gmail').style.visibility="hidden";
		document.getElementById('google').style.visibility="hidden";
		document.getElementById('box').style.visibility="hidden";
		document.getElementById('grabar').style.visibility="hidden";
		document.getElementById('twitter').style.visibility="hidden";
		document.getElementById('papelera').style.visibility="hidden";
		document.getElementById('telefono').style.visibility="hidden";
		document.getElementById('msg').style.visibility="hidden";
	 	document.getElementById('nintendo').style.visibility="hidden";
		document.getElementById('face').style.visibility="hidden";
		document.getElementById('call').style.visibility="hidden";


	 	document.getElementById('rio').style.visibility="visible";
	 	document.getElementById('me').style.visibility="visible";
		contador = 2;
	break;
	default:
	  alert("Adios");
	}
}
function siguiente(){

	var imagen_uno = "wal_2.jpg"
	var imagen_dos="wal_3.jpg"
	var imagen_tres="wal_6.jpg"

	switch(contador)
	{
	case 1:
	  document.getElementById('desktop').style.backgroundImage="url("+imagen_dos+")"; 
		
		document.getElementById('gmail').style.visibility="hidden";
		document.getElementById('google').style.visibility="hidden";
		document.getElementById('box').style.visibility="hidden";
		document.getElementById('grabar').style.visibility="hidden";
		document.getElementById('twitter').style.visibility="hidden";
		document.getElementById('papelera').style.visibility="hidden";
	 	document.getElementById('rio').style.visibility="visible";
	 	document.getElementById('me').style.visibility="visible";

	contador = 2;
	  break;
	case 2:
		document.getElementById('desktop').style.backgroundImage="url("+imagen_tres+")"; 
		document.getElementById('me').style.visibility="hidden";
		document.getElementById('rio').style.visibility="hidden";
		document.getElementById('call').style.visibility="visible";
	 	document.getElementById('telefono').style.visibility="visible";
		document.getElementById('msg').style.visibility="visible";
	 	document.getElementById('nintendo').style.visibility="visible";
		document.getElementById('face').style.visibility="visible";		
		contador = 3;
	  break;
	case 3:
		document.getElementById('desktop').style.backgroundImage="url("+imagen_uno+")"; 
		document.getElementById('gmail').style.visibility="visible";			
		document.getElementById('google').style.visibility="visible";
		document.getElementById('box').style.visibility="visible";
		document.getElementById('grabar').style.visibility="visible";
		document.getElementById('twitter').style.visibility="visible";
		document.getElementById('papelera').style.visibility="visible";
		document.getElementById('call').style.visibility="hidden";

	 	document.getElementById('telefono').style.visibility="hidden";
		document.getElementById('msg').style.visibility="hidden";
	 	document.getElementById('nintendo').style.visibility="hidden";
		document.getElementById('face').style.visibility="hidden";	
		document.getElementById('me').style.visibility="hidden";
		document.getElementById('rio').style.visibility="hidden";	
	 	
		contador = 1;

	break;
	default:
	  alert("Adios");
	}
}

function suma(){
	if (calculadora==true){
		numero_dos = numero_uno;
		document.getElementById('ventana').value="";
		opcion=1;
		calculadora=true;
	}
}
function resta(){

	if (calculadora==true){
		numero_dos = numero_uno;
		document.getElementById('ventana').value="";
		opcion=2;
		calculadora=true;
	}
}
function multiplicacion(){

	if (calculadora==true){
		numero_dos = numero_uno;
		document.getElementById('ventana').value="";
		opcion=3;
		calculadora=true;
	}
}
function division(){

	if (calculadora==true){
		numero_dos = numero_uno;
		document.getElementById('ventana').value="";
		opcion=4;
		calculadora=true;
	}
}
function modulo(){
	if (calculadora==true){
		numero_dos = numero_uno;
		document.getElementById('ventana').value="";
		opcion=5;
		calculadora=true;
	}
}

function igual(){
	switch (opcion){
		case 1:
		resultado= numero_uno+numero_dos;
		calculadora=true;
		break;
		case 2:
		resultado= numero_dos-numero_uno;
		calculadora=true;
		break;
		case 3:
		resultado= numero_uno*numero_dos;
		calculadora=true;
		break;
		case 4:
		resultado= numero_dos/numero_uno;
		calculadora=true;
		break;
		case 5:
		resultado=numero_uno%numero_dos;
		calculadora=true;
		break;
	}
	//alert(resultado);
	document.getElementById('ventana').value="";
	document.getElementById('ventana').value=resultado;
}
function numeros(){	
	document.getElementById('ventana').value=document.getElementById('ventana').value+numero_uno;
	numero_uno=parseInt(document.getElementById('ventana').value);
	//alert(numero_uno);
}

function cero(){numero_uno = parseInt(document.getElementById("cero").innerHTML); numeros();}
function uno(){numero_uno = parseInt(document.getElementById("uno").innerHTML); numeros();}
function dos(){numero_uno = parseInt(document.getElementById("dos").innerHTML); numeros();}
function tres(){numero_uno = parseInt(document.getElementById("tres").innerHTML); numeros();}
function cuatro(){numero_uno = parseInt(document.getElementById("cuatro").innerHTML); numeros();}
function cinco(){numero_uno = parseInt(document.getElementById("cinco").innerHTML); numeros();}
function seis(){numero_uno = parseInt(document.getElementById("seis").innerHTML); numeros();}
function siete(){numero_uno = parseInt(document.getElementById("siete").innerHTML); numeros();}
function ocho(){numero_uno = parseInt(document.getElementById("ocho").innerHTML); numeros();}
function nueve(){numero_uno = parseInt(document.getElementById("nueve").innerHTML); numeros();}
function diez(){numero_uno = parseInt(document.getElementById("diez").innerHTML); numeros();}


function calcu(){
	if (calculadora_visible== false){
		document.getElementById('calculadora').style.visibility="visible";
		calculadora_visible=true;
	}else{
		document.getElementById('calculadora').style.visibility="hidden";
		calculadora_visible=false;
	}
}
function datos(){
 	document.getElementById('datos').style.visibility="visible";
}

function salir(){
	document.getElementById('datos').style.visibility="hidden";
}


 function Calculadora(){
	   var calcu = new ActiveXObject("WScript.Shell");
   calcu.run("calc",0,true);
	 }
		//Calculadora();

	