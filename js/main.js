function validateForm(){
	
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var select = document.getElementsByClassName("form-control").selectedIndex;
	var twitter = document.getElementById("input-social").value;

	var contNombre = document.getElementsByClassName("name-container");
	var msjNombre = document.createElement("span");
	var mensajeNombre = document.createTextNode("La letra inicial de su nombre debe llevar mayúsucula");
	contNombre.appendChild(msjNombre);

	if(nombre == ""){
		
	}

	if else(apellido == ""){
		
	}

	if else(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}){

	}


}
