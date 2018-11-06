window.onload=function(){
	var operador=""

	var colorAramillo = function(){
		this.style.background = "yellow";
	}
	var colorBlanco = function(){
		this.style.background = "white";
	}
	var numeros = function(){
		var valor = this.value;
		if(operador==""){
			var valorInput = document.getElementById("operando1").value;
			if (valorInput == "0") {
				document.getElementById("operando1").value="";
			}
			document.getElementById("operando1").value+=valor;
		}
		else {
			var valorInput = document.getElementById("operando2").value;
			if (valorInput == "0") {
				document.getElementById("operando2").value="";
			}
			document.getElementById("operando2").value+=valor;
		}
	}

	var operadores = function(){
		operador = this.value
	}

	var resultadiIgual = function(){
		oper1=document.getElementById('operando1').value
		oper2=document.getElementById('operador2').value
		document.getElementById('resultado').value=eval(oper1+operador+oper2)

	}

	var reinicio = function(){
		document.getElementById('operando1').value="0"
		document.getElementById('operando2').value="0"
		document.getElementById('resultado').value="0"
		operador = ""
	}

	var operador1 = document.getElementById("operador1")
	var operador2 = document.getElementById("operador2")
	var resultado = document.getElementById("resultado")
	var uno = document.getElementById("uno")
	var dos = document.getElementById("dos")
	var tres = document.getElementById("tres")
	var cuatro = document.getElementById("cuatro")
	var cinco = document.getElementById("cinco")
	var seis = document.getElementById("seis")
	var siete = document.getElementById("siete")
	var ocho = document.getElementById("ocho")
	var nueve = document.getElementById("nueve")
	var cero = document.getElementById("cero")
	var suma = document.getElementById("suma")
	var resta = document.getElementById("resta")
	var multiplicacion = document.getElementById("multiplicacion")
	var division = document.getElementById("division")
	var igual = document.getElementById("igual")
	var reiniciar = document.getElementById("reiniciar")

	var operando1 = document.getElementById("operando1")
	operando1.addEventListener("focus", colorAramillo)
	operando1.addEventListener("focusout",colorBlanco)
	operando2.addEventListener("focus", colorAramillo)
	operando2.addEventListener("focusout",colorBlanco)
	uno.addEventListener("click", numeros)
	dos.addEventListener("click",numeros)
	tres.addEventListener("click",numeros)
	cuatro.addEventListener("click",numeros)
	cinco.addEventListener("click",numeros)
	seis.addEventListener("click",numeros)
	siete.addEventListener("click",numeros)
	ocho.addEventListener("click",numeros)
	nueve.addEventListener("click",numeros)
	cero.addEventListener("click",numeros)
	resultado.addEventListener("focus", colorAramillo)
	resultado.addEventListener("focusout",colorBlanco)
	reiniciar.addEventListener('click',reinicio)

	suma.addEventListener('click',operadores)
	resta.addEventListener('click',operadores)
	multiplicacion.addEventListener('click',operadores)
	division.addEventListener('click',operadores)
	igual.addEventListener('click',resultadoIgual)
}
