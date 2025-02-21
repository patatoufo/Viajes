// Recuperar el contador almacenado en el almacenamiento local
var contador = localStorage.getItem('contador') || 0;
var year = localStorage.getItem('year') || 0;
var dinero = localStorage.getItem('dinero') || 0;

var nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para incrementar el contador y actualizar la interfaz
function incrementarContador() {
  contador++;
  if (contador == 13 ) {
  year++;
  contador = "1";
  } 
  actualizarInterfaz();
  
  // Guardar el nuevo contador en el almacenamiento local
  localStorage.setItem('contador', contador);
  localStorage.setItem('year', year);
}

function restarDinero(cant) {
  dinero = dinero - cant ;
  // Guardar el nuevo contador en el almacenamiento local
  localStorage.setItem('dinero', dinero);
}

function sumarDinero() {
  dinero++;
  // Guardar el nuevo contador en el almacenamiento local
  localStorage.setItem('dinero', dinero);
}

function iniciarContador() {
  // Guardar el nuevo contador en el almacenamiento local
  localStorage.setItem('contador', 1);
  localStorage.setItem('year', 2022);
}
function iniciarDinero() {
  // Iniciamos con 100 euros
  localStorage.setItem('dinero', 100);
}
function iniciarInventario() {
	var inventario = [
	];
	localStorage.setItem('inventario', JSON.stringify(inventario));
	localStorage.setItem('arrayRecetas', JSON.stringify(arrayRecetasIni));
}
function iniciarEdificios() {
	localStorage.setItem('edificios', JSON.stringify(edificiosHome));
}
function iniciarPedidos() {
	var pedidos = [];
	localStorage.setItem('pedidos', JSON.stringify(pedidos));
	var pedidos = agregarPedidoAleatorio("Tienda");
	var pedidos = agregarPedidoAleatorio("Restaurante");
}
function iniciarHuerto() {
	var huerto = [];
	localStorage.setItem('huerto', JSON.stringify(huerto));
	agregarFrutaAleatoria();
}
function iniciarCamarero(array) {

	//var charla = randomFactsCity(ciudad);
	var recetasCity = recetasCiudad(ciudad,array);
	var recetasCityText = crearTextosRecetas(recetasCity);
	var recetasOtraCity = recetasOtraCiudad(ciudad,array);
	var recetasOtraCityText = crearTextosOtrasRecetas(recetasOtraCity);
	var recetasTotal = recetasCityText.concat(recetasOtraCityText);
	console.log(recetasTotal);
	var random = Math.floor(Math.random() * recetasTotal.length);
	if (recetasTotal.length === 0) {
		return "Enhorabuena, tienes todas las recetas";
	} else {

	return recetasTotal[random];
	}
}

function crearTextosRecetas(recetas) {
    var mensajes = [];
    recetas.forEach(function(receta) {
        var mensaje = "Para hacer " + receta.nombre + ", necesitas " + receta.ingrediente1 + " y " + receta.ingrediente2;
        mensajes.push(mensaje);
    });
    return mensajes;
}
function crearTextosOtrasRecetas(recetas) {
    var mensajes = [];
    recetas.forEach(function(receta) {
        var mensaje = "Creo que puedes encontrar una receta nueva en " + receta.ciudad ;
        mensajes.push(mensaje);
    });
    return mensajes;
}


//function crearTextosRecetas(recetas) {
//    recetas.forEach(function(receta) {
//        var textoReceta = "Para hacer " + receta.nombre + ", necesitas " + receta.ingrediente1 + " y " + receta.ingrediente2;
//		return textoReceta
//    });
//}

function checkPedidos() {
	var pedidos = JSON.parse(localStorage.getItem('pedidos'));
	function hayPedidoActivo(pedidos,edificio) {
		return pedidos.some(function(pedido) {
			return pedido.edificio === edificio && pedido.estado === 'activo';
		});
	}

	var activoT = hayPedidoActivo(pedidos,"Tienda");
	var activoR = hayPedidoActivo(pedidos,"Restaurante");
	var activoB = hayPedidoActivo(pedidos,"Bar");

	var edificios = JSON.parse(localStorage.getItem('edificios'));
	var indexBar = edificios.findIndex(item => item.nombre === "Bar");
	var estadoBar = edificios[indexBar].estado;



	if (activoT) {
		console.log("Hay al menos un pedido activo en la tienda.");
	} else {
	var pedidos = agregarPedidoAleatorio("Tienda");
	//localStorage.setItem('pedidos', JSON.stringify(pedidos));
	}
	if (activoR) {
		console.log("Hay al menos un pedido activo en el restaurante.");
	} else {
	var pedidos = agregarPedidoAleatorio("Restaurante");
	//localStorage.setItem('pedidos', JSON.stringify(pedidos));
	}
	if (activoB)  {
		console.log("Hay al menos un pedido activo en el bar.");
	} else if (estadoBar == "abierto") {
	var pedidos = agregarPedidoAleatorio("Bar");
	}

}
function checkHuerto() {
	var huerto = JSON.parse(localStorage.getItem('huerto'));
	function hayFrutaActiva(huerto) {
		return huerto.some(function(huerto) {
			return huerto.estado === 'activo';
		});
	}

	var activo = hayFrutaActiva(huerto);

	if (activo) {
		console.log("Hay al menos una fruta disponible.");
	} else {
	var huerto = agregarFrutaAleatoria();
	}
	
}

// Función para actualizar la interfaz con el valor del contador
function actualizarInterfaz() {
	var nombreMes = nombresMeses[contador - 1];
	
  document.getElementById('contador').textContent = nombreMes + " " + year;
  document.getElementById('dinero').textContent = dinero;
}

// Llamada inicial para cargar el contador en la interfaz al cargar la página
actualizarInterfaz();
