var boton = document.getElementById("AgregarLista");
boton.addEventListener("click", agregarLista);

function agregarLista(){
	var pre = document.getElementById("contenedor");
	pre.removeChild(boton);
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

	//Creando eventos en GUARDAR (0.0.2)
	bton.onclick = function(){
		var txt = input.value;
		var titulo = document.createTextNode(txt);

		pre.removeChild(formulario);

		var tarjeta = document.createElement("div");
		var h2 = document.createElement("h2");
		var annadir = document.createTextNode("Añadir tarjeta");
		var lista = document.createElement("button");

		lista.classList.add("btn", "mt-2");

		h2.appendChild(titulo);
		lista.appendChild(annadir);
		tarjeta.appendChild(h2);
		tarjeta.appendChild(lista);
		pre.appendChild(tarjeta);
		pre.appendChild(boton);
	}
}