
var precioBase = 250;
 var comision = precioBase * 0.30;
var UnoPorciento= 2.5;
var DosPorciento = 5;
var TresPorciento = 7.5;
var CincoPorciento = 12.5;
var OchoPorciento = 20;
var DocePorciento=30;




var nombre = prompt("Ingrese su nombre");

function isValidDate(day,month,year)
{
    var dteDate;
 
  
    month=month-1;
    
    dteDate=new Date(year,month,day);
 
   
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}

function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}
function calcularEdad()
{
    var fecha=document.getElementById("user_date").value;
    if(validate_fecha(fecha)==true)
    {
        
        var values=fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];
 
        
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();
 
       
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes )
        {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
 
        
        var meses=0;
        if(ahora_mes>mes)
            meses=ahora_mes-mes;
        if(ahora_mes<mes)
            meses=12-(mes-ahora_mes);
        if(ahora_mes==mes && dia>ahora_dia)
            meses=11;
 
        var dias=0;
        if(ahora_dia>dia)
            dias=ahora_dia-dia;
        if(ahora_dia<dia)
        {
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
 
        document.getElementById("result").innerHTML="Tienes "+edad+" años, "+meses+" meses y "+dias+" días";
    }else{
        document.getElementById("result").innerHTML="La fecha "+fecha+" es incorrecta";
    }
    if (edad < 21) {
	document.write("No se le aplican recargos por su edad");
}else{
		if(edad >= 21  && edad <25 ){
			document.write("Datos del Usuario:<br>");
						document.write("Nombre Usuario:"+ nombre +"<br>");
								document.write("Edad del Usuario:"+ edad + "<br>");

			document.write(" se le aplica un recargo del 1% del precio base por edad:__" + UnoPorciento  + "<br>" );
			
				var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
				console.log("<br> ¿Tiene cónyuge?: " + conyuge);
				if (conyuge == "SI") {
					var edadConyugue = prompt("Ingrese la edad del conyuge");
					if (edadConyugue < 30) {
	
						document.write("Aplicar recargo del 1% del precio base por conyuge:__"+ UnoPorciento + "<br>");

						var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								
								var TotalAPagar = precioBase + comision + UnoPorciento +UnoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + UnoPorciento +UnoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
					}else{
						if (edadConyugue >= 30 && edadConyugue< 40) {
							document.write("<br>Aplicar recargo del 2% del precio base por conyuge:__"+ DosPorciento + "<br>");

							var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log(" <br>cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
								document.write(nombre);
								document.write(edad);
								var TotalAPagar = precioBase + comision + DosPorciento +UnoPorciento + RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br>No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + DosPorciento +UnoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
						}else{
							if (edadConyugue >= 40 && edadConyugue < 50) {
								document.write("<br>Aplicar recargo del 3% del precio base por conyuge:__"+ TresPorciento + "<br>");

								var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
								var TotalAPagar = precioBase + comision + TresPorciento +UnoPorciento + cantidadHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);

							}else{
								document.write("<br>No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + TresPorciento +UnoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
							}else{
								if (edadConyugue >= 50 && edadConyugue < 70) {
									document.write("<br>Aplicar recargo del 5% del precio base por conyuge:__"+ CincoPorciento + "<br>");

									var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
							 
								var TotalAPagar = precioBase + comision + TresPorciento +UnoPorciento + RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +UnoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							

								}
							}
						}
					}
				}else{
					document.write("No tiene cargos por conyuge");
					var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
									var TotalAPagar = precioBase + comision +  DocePorciento +RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision +  UnoPorciento;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
				}





		}else{
				if (edad >= 25 && edad< 30 ) {
					document.write("Datos del Usuario:<br>");
						document.write("Nombre Usuario:"+ nombre +"<br>");
								document.write("Edad del Usuario:"+ edad + "<br>");
					document.write("Se le aplica un recargo del 2% del precio base por edad:__" + DosPorciento  + "<br>" );

					var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
				console.log("<br> ¿Tiene cónyuge?: " + conyuge);
				if (conyuge == "SI") {
					var edadConyugue = prompt("Ingrese la edad del conyuge");
					if (edadConyugue < 30) {
						document.write("<br>Aplicar recargo del 1% del precio base por conyuge:__"+ UnoPorciento + "<br>");

						var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + UnoPorciento +DosPorciento+ RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br>No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + UnoPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
					}else{
						if (edadConyugue >= 30 && edadConyugue< 40) {
							document.write("Aplicar recargo del 2% del precio base por conyuge:__"+ DosPorciento + "<br>");

							var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + UnoPorciento +DosPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + DosPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
						}else{
							if (edadConyugue >= 40 && edadConyugue < 50) {
								document.write("<br> Aplicar recargo del 3% del precio base por conyuge:__"+ TresPorciento + "<br>");

								var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + TresPorciento +DosPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + TresPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
							}else{
								if (edadConyugue >= 50 && edadConyugue < 70) {
									document.write("<br> Aplicar recargo del 5% del precio base por conyuge:__"+ CincoPorciento + "<br>");

									var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log(" <br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + TresPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							

								}
							}
						}
					}
				}else{
					document.write("<br> No tiene cargos por conyuge");
					var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
									var TotalAPagar = precioBase + comision +  DosPorciento +RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision +  DosPorciento;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
				}
				
			}else{
					if (edad >= 30 && edad< 40 ) {
						document.write("Datos del Usuario:<br>");
						document.write("Nombre Usuario:"+ nombre +"<br>");
								document.write("Edad del Usuario:"+ edad + "<br>");
						document.write("Se le aplica un recargo del 5% del precio base por edad:__" + CincoPorciento  + "<br>" );

						var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
				console.log("<br> ¿Tiene cónyuge?: " + conyuge);
				if (conyuge == "SI") {
					var edadConyugue = prompt("Ingrese la edad del conyuge");
					if (edadConyugue < 30) {
						document.write("<br> Aplicar recargo del 1% del precio base por conyuge:__"+ UnoPorciento + "<br>");

						var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + UnoPorciento +CincoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + UnoPorciento +CincoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
					}else{
						if (edadConyugue >= 30 && edadConyugue< 40) {
							document.write("<br> Aplicar recargo del 2% del precio base por conyuge:__"+ DosPorciento + "<br>");

							var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
									var TotalAPagar = precioBase + comision + DosPorciento +CincoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + DosPorciento +CincoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
						}else{
							if (edadConyugue >= 40 && edadConyugue < 50) {
								document.write("Aplicar recargo del 3% del precio base por conyuge:__"+ TresPorciento + "<br>");

								var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log(" cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + TresPorciento +CincoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + TresPorciento +CincoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
							}else{
								if (edadConyugue >= 50 && edadConyugue < 70) {
									document.write("Aplicar recargo del 5% del precio base por conyuge:__"+ CincoPorciento + "<br>");

									var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log(" cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + CincoPorciento +CincoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
									var TotalAPagar = precioBase + comision + CincoPorciento +CincoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							

								}
							}
						}
					}
				}else{
					document.write("No tiene cargos por conyuge");
					var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
									var TotalAPagar = precioBase + comision +  CincoPorciento +RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision +  CincoPorciento;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
				}
					
				}else{
						if (edad >= 40 && edad< 50 ) {	
						document.write("Datos del Usuario:<br>");
						document.write("Nombre Usuario:"+ nombre +"<br>");
								document.write("Edad del Usuario"+ edad + "<br>");				
							document.write("Se le aplica un recargo del 8% del precio base por edad:__" + OchoPorciento  + "<br>" );

						var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
				console.log("<br> ¿Tiene cónyuge?: " + conyuge);
				if (conyuge == "SI") {
					var edadConyugue = prompt("Ingrese la edad del conyuge");
					if (edadConyugue < 30) {
						document.write("<br> Aplicar recargo del 1% del precio base por conyuge:__"+ UnoPorciento + "<br>");

						var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log(" <br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br>Tiene:"+ cantidadHijos+ "_hijos <br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
						
								var TotalAPagar = precioBase + comision + UnoPorciento +OchoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
									var TotalAPagar = precioBase + comision + UnoPorciento +OchoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
					}else{
						if (edadConyugue >= 30 && edadConyugue< 40) {
							document.write("Aplicar recargo del 2% del precio base por conyuge:__"+ DosPorciento + "<br>");

							var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
									  
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var TotalAPagar = precioBase + comision + DosPorciento +OchoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
									var TotalAPagar = precioBase + comision + DosPorciento +OchoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
						}else{
							if (edadConyugue >= 40 && edadConyugue < 50) {
								document.write("<br> Aplicar recargo del 3% del precio base por conyuge:__"+ TresPorciento + "<br>");

								var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
								var TotalAPagar = precioBase + comision + TresPorciento +OchoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + TresPorciento +OchoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
							}else{
								if (edadConyugue >= 50 && edadConyugue < 70) {
									document.write("Aplicar recargo del 5% del precio base por conyuge:__"+ CincoPorciento + "<br>");

									var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var TotalAPagar = precioBase + comision + CincoPorciento +OchoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +OchoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
								}
							}
						}
					}
				}else{
					document.write("<br> No tiene cargos por conyuge");
					var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
									var TotalAPagar = precioBase + comision +  OchoPorciento +RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision +  OchoPorciento;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
						
				}
						
					}else{
						if (edad >= 50 && edad< 65 ) {	
						document.write("Datos del Usuario:<br>");
						document.write("Nombre Usuario:"+ nombre +"<br>");
								document.write("Edad del Usuario:"+ edad + "<br>");						
							document.write("Se le aplica un recargo del 12% del precio base por edad:__" + DocePorciento  );

						var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
				console.log("<br> ¿Tiene cónyuge?: " + conyuge);
				if (conyuge == "SI") {
					var edadConyugue = prompt("Ingrese la edad del conyuge");
					if (edadConyugue < 30) {
						document.write("<br> Aplicar recargo del 1% del precio base por conyuge:__"+ UnoPorciento + "<br>");

						var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
								 
									var TotalAPagar = precioBase + comision + CincoPorciento +UnoPorciento+RecargoHijos ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +UnoPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
					}else{
						if (edadConyugue >= 30 && edadConyugue< 40) {
							document.write("Aplicar recargo del 2% del precio base por conyuge:__"+ DosPorciento + "<br>");

							var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br> cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +DosPorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
							
						}else{
							if (edadConyugue >= 40 && edadConyugue < 50) {
								document.write("Aplicar recargo del 3% del precio base por conyuge:__"+ TresPorciento + "<br>");

								var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + TresPorciento +DocePorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}						
							}else{
								if (edadConyugue >= 50 && edadConyugue < 70) {
									document.write("<br> Aplicar recargo del 5% del precio base por conyuge:__"+ CincoPorciento + "<br>");

									var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br> Este es el recargo por sus hijos:__" + RecargoHijos);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision + CincoPorciento +DocePorciento ;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
								}
							}
						}
					}
				}else{
					document.write("<br> No tiene cargos por conyuge");
					var hijos = prompt("¿Tiene hijos?", "SI/NO");
						console.log("<br> ¿Tiene hijos?: " + hijos);
										if (hijos == "SI") {
								var  cantidadHijos  =  prompt ( "Ingrese la cantidad de hijos menores de 21 años:" ,  "Por favor ingrese los números" );
								console.log("<br>  cantidad de hijos menores de 21 años: " + cantidadHijos);
								document.write("<br> Tiene:"+ cantidadHijos+ "_hijos<br>");
								var RecargoHijos = cantidadHijos * UnoPorciento;
								document.write("<br>Este es el recargo por sus hijos:__" + RecargoHijos);
								var TotalAPagar = precioBase + comision +  DocePorciento +RecargoHijos;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}else{
								document.write("<br> No tiene cargos por hijos");
								var TotalAPagar = precioBase + comision +  DocePorciento;
							document.write("<br> El Total a pagar es__: "+TotalAPagar);
							}
				}	
						}else{
							if (edad >= 65 ) {
								document.write("No se le puede asegurar");
							}
						}
					}
				}
			}
		}
	}
}
	


	









