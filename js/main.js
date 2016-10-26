var boton = document.getElementById("AgregarLista");
boton.addEventListener("click", agregarLista);

function agregarLista(){
	var diiv = document.getElementById("lista");
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
	diiv.appendChild(formulario);

	//Creando eventos en GUARDAR
	bton.onclick = function(){
		var txt = input.value;
		var titulo = document.createTextNode(txt);

		var h3 = document.createElement("h3");

		h3.appendChild(titulo);
		pre.appendChild(h3);
		diiv.removeChild(formulario);
	}
}