var nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

var ciudades = ["Madrid", "Paris", "Berlin", "Dubrovnik", "Cesky Krumlov", "Atenas", "Edimburgo", "Londres", "Roma", "Budapest", "Salzburgo", "Cracovia"];
ciudades.sort();

var clientes = [
{ id: 0, cliente: 'Cliente1', nombre: 'Señora Meyer'},
{ id: 1, cliente: 'Cliente2', nombre: 'Alfredo'},
{ id: 2, cliente: 'Cliente3', nombre: 'Nathalie'},
{ id: 3, cliente: 'Cliente4', nombre: 'Lord Kensington'},
{ id: 3, cliente: 'Cliente5', nombre: 'Ray'}
];

var frutas = [
{ id: 0, nombre: 'Manzana'},
{ id: 1, nombre: 'Uva'},
{ id: 2, nombre: 'Naranja'},
{ id: 3, nombre: 'Fresa'},
];

var edificiosHome = [
{ id: 0, nombre: 'Tienda', estado: 'abierto'},
{ id: 2, nombre: 'Restaurante', estado: 'abierto'},
{ id: 1, nombre: 'Bar', estado: 'cerrado'}
]

var urlParams = new URLSearchParams(window.location.search);
var ciudad = urlParams.get('ciudad');

var objetosJuego = [
    { id: 0, nombre: 'Pan', edificio :'Tienda', precio: 1, ciudad :'home', tipo:'ing'},
    { id: 1, nombre: 'Pescado', edificio :'Tienda',precio: 1, ciudad :'home', tipo:'ing'},
    { id: 2, nombre: 'Carne', edificio :'Tienda', precio: 1 , ciudad :'home', tipo:'ing' },
    { id: 3, nombre: 'Queso', edificio :'Tienda', precio: 1, ciudad :'home', tipo:'ing' },
    { id: 10, nombre: 'Tomate',edificio :'Tienda', precio: 1 ,ciudad :'home', tipo:'ing' },
    { id: 14, nombre: 'Patata',edificio :'Tienda', precio: 1 ,ciudad :'home', tipo:'ing' },
    { id: 14, nombre: 'Hielo',edificio :'Tienda', precio: 0.5 ,ciudad :'home', tipo:'ing' },    
    { id: 5, nombre: 'Paprika',edificio :'Tienda', precio: 2 ,ciudad :'Budapest', tipo:'ing' },
    { id: 6, nombre: 'Aceite',edificio :'Tienda', precio: 2 ,ciudad :'Madrid', tipo:'ing' },
    { id: 7, nombre: 'Mantequilla',edificio :'Tienda', precio: 2 ,ciudad :'Paris', tipo:'ing' },
    { id: 8, nombre: 'Mostaza',edificio :'Tienda', precio: 2 ,ciudad :'Berlin', tipo:'ing' },
    { id: 19, nombre: 'Botella de Whisky',edificio :'Tienda', precio: 3 ,ciudad :'Edimburgo', tipo:'ing' },
    { id: 4, nombre: 'Croissant', edificio :'Restaurante', precio: 4 ,ciudad :'Paris', tipo:'receta', tiporeceta:'especial', ingrediente1:'Pan',ingrediente2:'Mantequilla' },
    { id: 8, nombre: 'Bratwurst',edificio :'Restaurante', precio: 4 ,ciudad :'Berlin', tipo:'receta', tiporeceta:'especial' , ingrediente1:'Carne',ingrediente2:'Mostaza' },
    { id: 9, nombre: 'Hamburguesa',edificio :'Restaurante', precio: 3 ,ciudad :'All', tipo:'receta', tiporeceta:'normal', ingrediente1:'Pan',ingrediente2:'Carne' },
    { id: 17, nombre: 'Pao de Queijo',edificio :'Restaurante', precio: 3 ,ciudad :'All', tipo:'receta', tiporeceta:'normal', ingrediente1:'Pan',ingrediente2:'Queso' },
    { id: 18, nombre: 'Tomates Rellenos',edificio :'Restaurante', precio: 3 ,ciudad :'All', tipo:'receta', tiporeceta:'normal', ingrediente1:'Tomate',ingrediente2:'Carne' },
    { id: 11, nombre: 'Pizza',edificio :'Restaurante', precio: 3 ,ciudad :'All', tipo:'receta', tiporeceta:'normal', ingrediente1:'Tomate',ingrediente2:'Pan' },
    { id: 12, nombre: 'Souvlaki',edificio :'Restaurante', precio: 5 ,ciudad :'Atenas', tipo:'receta', tiporeceta:'unica', ingrediente1:'Pan',ingrediente2:'Carne' },
    { id: 13, nombre: 'Bravas',edificio :'Restaurante', precio: 5 ,ciudad :'Madrid', tipo:'receta', tiporeceta:'unica', ingrediente1:'Tomate',ingrediente2:'Patata' },
    { id: 15, nombre: 'Fish and Chips',edificio :'Restaurante', precio: 5 ,ciudad :'Londres', tipo:'receta', tiporeceta:'unica', ingrediente1:'Pescado',ingrediente2:'Patata' },
    { id: 16, nombre: 'Pierogi',edificio :'Restaurante', precio: 5 ,ciudad :'Cracovia', tipo:'receta', tiporeceta:'unica', ingrediente1:'Pan',ingrediente2:'Carne' },
    { id: 17, nombre: 'Cheesecake',edificio :'Restaurante', precio: 4 ,ciudad :'All', tipo:'receta', tiporeceta:'especial', ingrediente1:'Queso',ingrediente2:'Fresa' },
    { id: 18, nombre: 'Zumo de Naranja',edificio :'Bar', precio: 4 ,ciudad :'All', tipo:'receta', tiporeceta:'especial', ingrediente1:'Hielo',ingrediente2:'Naranja' },
    { id: 20, nombre: 'Whisky',edificio :'Bar', precio: 5 ,ciudad :'Edimburgo', tipo:'receta', tiporeceta:'unica', ingrediente1:'Hielo',ingrediente2:'Botella de Whisky' },    
    ]

    var randomFacts = [
        {ciudad :'Atenas', texto: 'Atenas es considerada la cuna de la democracia, ya que fue la primera ciudad en establecer un sistema democrático en el siglo V a.C.'},
        {ciudad :'Atenas', texto: 'La Acrópolis de Atenas es uno de los sitios arqueológicos más famosos del mundo y alberga algunos de los monumentos más emblemáticos de la Antigua Grecia como el Partenón'},
        {ciudad :'Atenas', texto: 'Atenas fue el hogar de algunos de los filósofos más influyentes de la historia, como Sócrates, Platón y Aristóteles'},
        {ciudad :'Atenas', texto: 'Los Juegos Olímpicos modernos fueron revividos en Atenas en 1896, marcando el comienzo de la era moderna de los Juegos Olímpicos'},
        {ciudad :'All', texto: 'FactGen'},
    ]
 
    function randomFactsCity(ciudad) {
        var cityFacts = randomFacts.filter(function(objeto) {
            return objeto.ciudad === ciudad || objeto.ciudad === "All";
        });
    
        return cityFacts;
    }

    function recetasCiudad(ciudad,arrayRecetas) {
        var recetasCity = arrayRecetas.filter(function(objeto) {
            return ["All",ciudad].includes(objeto.ciudad) && objeto.tipo === "receta" && objeto.nueva === "1";
        });
    
        return recetasCity;
    }
    function recetasOtraCiudad(ciudad,arrayRecetas) {
        var recetasCity = arrayRecetas.filter(function(objeto) {
            return objeto.ciudad !== ciudad && objeto.ciudad !== "All" && objeto.tipo === "receta"  && objeto.nueva === "1";
        });
    
        return recetasCity;
    }

//    function randomFactsCity(ciudad) {
//        console.log(ciudad);
//        var cityFacts = randomFacts.filter(function(objeto) {
  //          return objeto.ciudad === "Atenas";
    //      })     
    //}

var arrayRecetasIni = objetosJuego
  .filter(function(objeto) {
    return objeto.tipo === "receta";
  })
  .map(function(objeto) {
    objeto.nueva = "1";
    return objeto;
  });


var objetosTienda = objetosJuego.filter(function(objeto) {
  return ["all",ciudad].includes(objeto.ciudad) && ["ing"].includes(objeto.tipo);
});
var objetosTiendaBarrio = objetosJuego.filter(function(objeto) {
  return ["home"].includes(objeto.ciudad) && ["ing"].includes(objeto.tipo);
});


function VolverHome() {
	NuevoTurno();
	checkPedidos();
    checkHuerto();
	window.location.href = 'Home.html';
}
function SeguirHome() {

	window.location.href = 'Home.html?turno=non';
}


function Viajar() {
    var seleccion = listaDesplegable.value;
    if (dinero > 9) {
	    restarDinero(10);
        window.location.href = 'Ciudad.html?ciudad=' + encodeURIComponent(seleccion);
    } else {
    document.getElementById('alertaDinero').textContent = 'No tienes suficiente dinero para viajar.';
    document.getElementById('alertaDinero').style.color = 'red';
    }
}
function Quedarse() {
    incrementarContador();
    window.location.href = 'Ciudad.html?ciudad=' + ciudad;
}
function NuevoTurno() {
    incrementarContador();
    window.location.href = 'Ciudad.html?ciudad=' + ciudad;
}
function Tienda() {
    window.location.href = 'Tienda.html?ciudad=' + ciudad;
}
function Inventario() {
    window.location.href = 'Inventario.html?ciudad=' + ciudad;
}
function Cocina() {
    window.location.href = 'Cocina.html?ciudad=' + ciudad;
}
function CocinaHome() {
    window.location.href = 'Home_Cocina.html';
}
function VolverCiudad() {
    window.location.href = 'Ciudad.html?ciudad=' + ciudad;
}
function Bar() {
    window.location.href = 'Bar.html?ciudad=' + ciudad;
}
function GestRest() {
 window.location.href = 'Home_Rest.html';
}
function GestBar() {
    window.location.href = 'Home_Bar.html';
}   
function GestTienda() {
 window.location.href = 'Home_Tienda.html';
}
function Huerto() {
 window.location.href = 'Home_Huerto.html';
}
function TiendaBarrio() {
 window.location.href = 'Home_TiendaBarrio.html';
}

function VenderHome(objeto,precio,cantidad) {
		dinero = (+dinero) + (+precio)*cantidad;
		restarObjetoInventario(objeto,cantidad);
		window.location.href = 'Home.html?turno=non';
		} 

function ComprarHome(objeto,precio,cantidad) {
		dinero = (+dinero) - (+precio)*cantidad;
		sumarObjetoInventario(objeto,cantidad);
		window.location.href = 'Home.html?turno=non';
		} 

function ComprarTiendaBarrio(objeto,precio) {
    if (dinero >= precio) {
		dinero = dinero - precio;
		sumarObjetoInventario(objeto,1);
		window.location.href = 'Home_TiendaBarrio.html';
		} else {
		document.getElementById('alertaDinero').textContent = 'No tienes suficiente dinero para comprar.';
		document.getElementById('alertaDinero').style.color = 'red';
    }
}

function sumarObjetoInventario(objeto,cantidad) {
	var inventario = JSON.parse(localStorage.getItem('inventario'));
	var indexObjeto = inventario.findIndex(item => item.nombre === objeto);
		// Si se encuentra el elemento en el array, sumo X
		if (indexObjeto !== -1) {
//			inventario[indexObjeto].cantidad = inventario[indexObjeto].cantidad + +cantidad;
            inventario[indexObjeto].cantidad = parseInt(inventario[indexObjeto].cantidad) + parseInt(cantidad);

	} else {
  	inventario.push({ nombre: objeto, cantidad: cantidad });
	}
	localStorage.setItem('inventario', JSON.stringify(inventario));
	localStorage.setItem('dinero', dinero);
}

function restarObjetoInventario(objeto,cantidad) {
	var inventario = JSON.parse(localStorage.getItem('inventario'));
	var indexObjeto = inventario.findIndex(item => item.nombre === objeto);
		// Si se encuentra el elemento en el array, resto cantidad
		if (inventario[indexObjeto].cantidad > 0) {
			inventario[indexObjeto].cantidad = inventario[indexObjeto].cantidad - cantidad;
	} 
	localStorage.setItem('inventario', JSON.stringify(inventario));
	localStorage.setItem('dinero', dinero);
}

function Trabajar() {
	sumarDinero()
    incrementarContador();	
    window.location.href = 'Ciudad.html?ciudad=' + ciudad;
}
function Comprar(objeto,precio) {
	if (dinero >= precio) {
		dinero = dinero - precio;
		incrementarContador();
		sumarObjetoInventario(objeto,1);
		window.location.href = 'Tienda.html?ciudad=' + ciudad;
		} else {
		document.getElementById('alertaDinero').textContent = 'No tienes suficiente dinero para comprar.';
		document.getElementById('alertaDinero').style.color = 'red';
    }
}

function Vender(objeto,precio) {
		dinero = (+dinero) + (+precio);
		incrementarContador();
		restarObjetoInventario(objeto,1);
		window.location.href = 'Bar.html?ciudad=' + ciudad;
	} 

function CalculaPrecioVenta(ciudadAct,ciudadObj,precio) {
    if (ciudadAct === ciudadObj || ciudadObj === "all") {
		precioVenta = precio / 2;
		} else {
		precioVenta = precio * 2;
        }
	return precioVenta
}
function CalculaPrecioVentaHome(objeto) {

	var indexObjeto = objetosJuego.findIndex(item => item.nombre === objeto);
	var precioVenta = objetosJuego[indexObjeto].precio * 2;
	return precioVenta
}

function Restart() {
    iniciarContador();
	iniciarDinero();
	iniciarInventario();
    window.location.href = 'index.html';
}

function FindImg(city) {
    var contador = localStorage.getItem('contador') || 0;
    var temporada;
    if (contador == 3 || contador == 4 || contador == 5) {
        temporada = "Spring";
    } else if (contador == 6 || contador == 7 || contador == 8) {
        temporada = "Summer";
    } else if (contador == 9 || contador == 10 || contador == 11) {
        temporada = "Autumm";
    } else if (contador == 1 || contador == 2) {
        temporada = "Winter";
    } else if (contador == 12) {
        temporada = "Christmas";
    } else {
        temporada = "Otra temporada"; // Puedes manejar otros valores del contador según sea necesario
    }
	
    return "Ciudades/" + city + "_" + temporada + ".jpg"
}

function AddImg(city) {
	var imgCity = FindImg(city);
	console.log(imgCity);
    var imagen = document.createElement("img");
    imagen.src = imgCity;
    imagen.onerror = function() {
        imagen.src = "Ciudades/" + city + ".jpg";
        imagen.onload = function() {
        };
    }
    imagen.alt = city;
    return imagen
}
function AddBarman(city) {
    var imagen = document.createElement("img");
    imagen.src = "Ciudades/Barman/" + city + ".jpg";
    imagen.onerror = function() {
    console.log("Error al cargar la primera imagen. Intentando con la segunda opción.");
    imagen.src = "Ciudades/Barman/Berlin.jpg";
        };
    return imagen
}

function AddBar(city) {
    var imagen = document.createElement("img");
    imagen.src = "Ciudades/Bar/" + city + ".jpg";
    imagen.onerror = function() {
    console.log("Error al cargar la primera imagen. Intentando con la segunda opción.");
    // Intentar cargar la segunda opción
    imagen.src = "Ciudades/Bar/bar.jpg";
        };
    return imagen
}
function AddTienda(city) {
    var imagen = document.createElement("img");
    imagen.src = "Ciudades/Tienda/" + city + ".jpg";
    imagen.onerror = function() {
    console.log("Error al cargar la primera imagen. Intentando con la segunda opción.");
    imagen.src = "Ciudades/Tienda/tienda.jpg";
        };
    return imagen
}
function AddObjeto(objeto) {
    var imagen = document.createElement("img");
    imagen.src = "Ciudades/Objetos/" + objeto + ".jpg";
    imagen.onerror = function() {
    console.log("Error al cargar la primera imagen. Intentando con la segunda opción.");
    imagen.src = "Ciudades/Tienda/tienda.jpg";
        };
    return imagen
}

function mostrarModal() {
    var modal = document.getElementById('miModal');
    modal.style.display = 'flex';
}
function cerrarModal() {
    var modal = document.getElementById('miModal');
    modal.style.display = 'none';
}

function encontrarPrimerPedido(nombreRestaurante) {
    // Iterar sobre la lista de pedidos
    for (var i = 0; i < pedidos.length; i++) {
        // Verificar si el pedido actual pertenece al restaurante dado
        if (pedidos[i].edificio === nombreRestaurante && pedidos[i].estado === 'activo') {
            // Devolver el índice del primer pedido del restaurante
            return i;
        }
    }
    // Si no se encuentra ningún pedido para el restaurante dado, devolver -1
    return -1;
}

function encontrarPedido(nombreRestaurante, numeroPedido) {
    // Contador para rastrear el número de pedidos encontrados
    var contador = 0;
    
    // Iterar sobre la lista de pedidos
    for (var i = 0; i < pedidos.length; i++) {
        // Verificar si el pedido actual pertenece al restaurante dado
        if (pedidos[i].edificio === nombreRestaurante && pedidos[i].estado === 'activo') {
            // Incrementar el contador de pedidos encontrados
            contador++;
            
            // Si el contador coincide con el número de pedido deseado, devolver el índice del pedido
            if (contador === numeroPedido) {
                return i;
            }
        }
    }
    // Si no se encuentra ningún pedido para el restaurante dado o el número de pedido dado, devolver -1
    return -1;
}
function encontrarFruta(numeroPedido) {
    var contador = 0;   
    for (var i = 0; i < huerto.length; i++) {
        // Verificar si el pedido actual pertenece al restaurante dado
        if (huerto[i].estado === 'activo') {
            contador++;
            if (contador === numeroPedido) {
                return i;
            }
        }
    }
    // Si no se encuentra ningún pedido para el restaurante dado o el número de pedido dado, devolver -1
    return -1;
}



function BuscaObjetoCantidad(objeto) {
    var inventario = JSON.parse(localStorage.getItem('inventario'));
    var indexObjeto = inventario.findIndex(item => item.nombre === objeto);
		if (indexObjeto !== -1) {
		var cant = inventario[indexObjeto].cantidad;
			} else {
		var cant = 0;
		}
	return cant;
}

function agregarPedidoAleatorio(edificio) {
	var objetosTienda = objetosJuego
  .filter(function(objeto) {
    return objeto.edificio === edificio;
  })
	
    var pedidos = JSON.parse(localStorage.getItem('pedidos'));
    var indexCliente = Math.floor(Math.random() * clientes.length);
    var indexObjeto = Math.floor(Math.random() * objetosTienda.length);
    // Seleccionar un cliente y un edificio aleatorios
    var cliente = clientes[indexCliente].cliente;
	var clienteName = clientes[indexCliente].nombre;
    var objeto = objetosTienda[indexObjeto].nombre;
	var cantidad = Math.floor(Math.random() * 5) + 1;

    // Crear un nuevo objeto de pedido con la información aleatoria
    var nuevoPedido = {
        id: pedidos.length, // Asignar un nuevo ID único
        edificio: edificio,
		cliente: cliente,
		clienteName: clienteName,
        nombre: objeto, 
        cantidad: cantidad, 
        estado: 'activo', 
        texto: clienteName + ' quiere ' + cantidad + ' ' + objeto 
    };
	console.log(pedidos);
    // Agregar el nuevo pedido a la lista de pedidos
    pedidos.push(nuevoPedido);
	console.log(pedidos);
    // Puedes mostrar el nuevo pedido en la consola para verificar
    console.log('Nuevo pedido agregado:', nuevoPedido);
	console.log(pedidos);
	localStorage.setItem('pedidos', JSON.stringify(pedidos));	
return pedidos;	
}

function agregarFrutaAleatoria() {

var huerto = JSON.parse(localStorage.getItem('huerto'));
    // Generar índices aleatorios para el cliente y el edificio
    var indexFruta = Math.floor(Math.random() * frutas.length);

    var objeto = frutas[indexFruta].nombre;
	var cantidad = Math.floor(Math.random() * 3) + 2;
	var precio = Math.floor(Math.random() * 3) + 1;

    // Crear un nuevo objeto de pedido con la información aleatoria
    var nuevaFruta = {
        id: huerto.length, // Asignar un nuevo ID único
        nombre: objeto, 
        cantidad: cantidad, 
		precio: precio, 
        estado: 'activo', 
        texto: ' Hoy tengo ' + cantidad + ' kilos de ' + objeto + ' por ' + precio + ' € el kilo'
    };
    huerto.push(nuevaFruta);
	console.log(huerto);
	localStorage.setItem('huerto', JSON.stringify(huerto));	
return huerto;	
}
