const OPCION_SALIR = 4;
const IVA = 1.21;
let totalDeProducto = 1000;
const productosCargados = [
        {
                id:1,
             nombre:"Zapatilla Nike",
             precio:35000,
             categoria: "zapatilla"   
        },
        {
                id:2,
                nombre:"Mochila Nike",
                precio:15000,
                categoria: "mochilas"   
        },
        {
                id:3,
                nombre:"Cartera Gucci",
                precio:85000,
                categoria: "cartera"   
        },
        {
                id:4,
                nombre:"Cartera Juanita Jo",
                precio:38000,
                categoria: "cartera"   
        },
]
const carrito = []; 
const historial = [];

const verCarteras = () => {
        let mensaje = 'Lista de producto: \n';
        productosCargados.forEach(el =>{
                if(el.categoria === "cartera"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito

        const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) // [{producto}]
        alert("Agregado al carrito correctamente")
}

const verMochilas = () => {
        let mensaje = 'Lista de producto: \n';
        productosCargados.forEach(el =>{
                if(el.categoria === "mochilas"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito

        const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) // [{producto}]
        alert("Agregado al carrito correctamente")
}

const mostrarDetalle = () => {
        carrito.forEach(el => 
                alert("Primer producto:" + el.nombre + ", precio: " + el.precio)
                )
}

const verProductos = () => {
        let opcion;
        opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Carteras \n 2-Mochilas \n 3-Zapatillas \n 4-Volver Atras "));
        while (opcion != OPCION_SALIR) {
                switch (opcion) {
                        case 1:
                                verCarteras();
                                break;
                        case 2:
                                verMochilas();
                                break;
                        case 3: mostrarDetalle();
                                break;
                        default:
                                alert("Ingreso una opcion invalida.");
                                break;
                }
                opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Carteras \n 2-Mochilas \n 3-Zapatillas \n 4-Volver Atras "));
        }
}

const verCarrito = () => {
        let mensaje = 'Carrito: \n';
        const numeroCompra = Math.round(Math.random() * 10000000 + 100000)

        carrito.forEach(el =>{               
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                
        })
        const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
        mensaje += `TOTAL                    $${total}`;
        mensaje += "Desea realizar la compra ? (si/no)";
        const respuesta = prompt(mensaje);
        if(respuesta.toLowerCase() == "si"){ // pasartelo a minuscula
                historial.push({
                        numero: numeroCompra,
                        nombre: prompt("ingrese nombre"),
                        direccion: prompt("ingresa direccion")
                })
                alert("Felicitaciones tu compra fue realizada con exito \n N° " + numeroCompra + "\n guarda el numero para recibir el producto")
                carrito.splice(); // borramos el carrito luego de una compra
        }
}

const calcularIVA = (total) => {
    const resultado = IVA * total
    alert("El total con IVA: $" + resultado + "\n El total es: $" + total);
}

let opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Carrito \n 3-Ver compras \n 4 Salir "))

while(opcion != OPCION_SALIR ){

    switch(opcion){
        case 1: 
                verProductos();
                break;
        case 2: 
                verCarrito();
                break;
        case 3: 
                verCompras();
                break;
        default:
            alert("Ingreso una opcion invalida.");
            break;
    }

    opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Carrito \n 3-Calcular IVA \n 4 Salir "));
}

alert("Gracias vuelva pronto.");