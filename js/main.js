function validateForm(){

//creo las variables para llamar a los id presentes en html 
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var select = document.getElementById("form-control").selectedIndex;
	var twitter = document.getElementById("input-social").value;

	var contNombre = document.getElementsByClassName("input-box")[0];
	var contApellido = document.getElementsByClassName("input-box")[1];
	var contEmail = document.getElementsByClassName("input-box")[2];
	var contPassword = document.getElementsByClassName("input-box")[3];
	var contSelect = document.getElementsByClassName("input-box")[4];

//validar campo nombre. La primera letra debe ser mayúscula. Estos nodos no tienen un id por lo que intento crear un span desde js 
//y ubicarla dentro del div cuya clase es input-box, como hay varios div con esa clase las llamo por su indice[]


if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
	
	var msjNombre = document.createElement("span");
	var mensajeNombre = document.createTextNode("La letra inicial de su nombre debe llevar mayúsucula");
	msjNombre.appendChild(mensajeNombre);
	contNombre.appendChild(msjNombre);
}


//validar campo apellido. La primera letra de esta debe ser mayúscula y solo letras 

if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido))){
	
	var msjApellido = document.createElement("span");
	var mensajeApellido = document.createTextNode("La letra inicial de su apellido debe llevar mayúsucula");
	msjApellido.appendChild(mensajeApellido);
	contApellido.appendChild(msjApellido);

}


//validar campo email. El formato debe contener un @ y un .
if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
	
	var msjEmail = document.createElement("span");
	var mensajeEmail = document.createTextNode("email debe llevar @ y un .");
	msjEmail.appendChild(mensajeEmail);
	contEmail.appendChild(msjEmail);
}

//Validar campo password. debe tener al menos 6 dígito 


if((password == "password") || (password == 123456) || (password == 098754) || (password.length < 5) || (password.length > 7 )){
	
	var msjPassword = document.createElement("span");
	var mensajePassword = document.createTextNode("Ingrese su contraseña debe tener al menos 6 dígitos y no debe ser 123456 o 098754 ");
	msjPassword.appendChild(mensajePassword);
	contPassword.appendChild(msjPassword);
}


//validar campo select. El usuario debe elegir alguna de las opciones.

if else(select == "0" || select == ""){
	
	var msjSelect = document.createElement("span");
	var mensajeSelect = document.createTextNode("Elige una opción");
	msjSelect.appendChild(mensajeSelect);
	contSelect.appendChild(msjSelect);
}


//no corre

}

validateForm();