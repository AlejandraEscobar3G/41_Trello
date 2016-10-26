var boton = document.getElementById("AgregarLista");
boton.addEventListener("click", agregarLista);

function agregarLista(){
	var pre = document.getElementById("contenedor");
	
	// formulario
	var formulario = document.createElement("DIV");
	formulario.classList.add("form-group");
	
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Nombre de lista");
	var bton = document.createElement("button");
	var texto = document.createTextNode("Guardar");
	// APPENDCHILD
	bton.appendChild(texto);
	formulario.appendChild(input);
	formulario.appendChild(bton);
	pre.appendChild(formulario);

}