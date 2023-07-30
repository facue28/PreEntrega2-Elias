const OPCION_SALIR = 6;

const productosDisponibles = [
    {
        id : 1,
        nombre: "Alfajor Raw" ,
        precio: 450 ,
        categoria: "dulces" ,
    },
    {
        id : 2,
        nombre: "Alfajor con pasta de avellanas" ,
        precio: 400 ,
        categoria: "dulces" ,
    },
    {
        id : 3,
        nombre: "Alfajor de dulce de leche" ,
        precio: 500 ,
        categoria: "dulces" ,
    },
    {
        id : 4,
        nombre: "Pastas de poroto negro" ,
        precio: 760 ,
        categoria: "pastas" ,
    },
    {
        id : 5,
        nombre: "Pasta multicereal" ,
        precio: 700 ,
        categoria: "pastas" ,
    },
    {
        id : 6,
        nombre: "Penne Rigate" ,
        precio: 350 ,
        categoria: "pastas" ,
    },
    {
        id : 7,
        nombre: "Vifes a la criolla" ,
        precio: 2100 ,
        categoria: "congelados" ,
    },
    {
        id : 8,
        nombre: "Canelones con salsa" ,
        precio: 2210 ,
        categoria: "congelados" ,
    },
    {
        id : 9,
        nombre: "Empanadas de JyQ" ,
        precio: 1860 ,
        categoria: "congelados" ,
    },
    {
        id : 10,
        nombre: "Pan de papa x 4" ,
        precio: 820 ,
        categoria: "panificacion" ,
    },
    {
        id : 11,
        nombre: "Pan blanco lactal" ,
        precio: 650 ,
        categoria: "panificacion" ,
    },
    {
        id : 12,
        nombre: "Pan de pancho" ,
        precio: 780 ,
        categoria: "panificacion" ,
    },
    
]

const carrito = []



const vistaProductos = []

const verProductos = (opcion) => {
    let mensaje = "Productos: \n";
    productosDisponibles.forEach(el =>{
        if(el.categoria === opcion) {
            vistaProductos.push(el) ;
        }
    })
    vistaProductos.forEach(el =>{
        mensaje += `${el.id} - ${el.nombre}  - $${el.precio} \n`  ;
    })
    let producto = parseInt(prompt("Ingrese id del producto \n" + mensaje + " Volver" ))
    if (vistaProductos.find(el => el.id === producto)){
    const productoElegido = vistaProductos.find(el => el.id === producto);
    carrito.push(productoElegido);
    const cantidad = parseInt(prompt("Ingrese la cantidad deseada:"));
    const cantidadProducto = carrito[carrito.length - 1];
    cantidadProducto.precio = cantidadProducto.precio * cantidad;
    alert("Producto agregado al carrito.");
    } else {
        alert ("Id Invalido")
    }
    vistaProductos.splice(0,vistaProductos.length);
}



const verCarrito = () => {
    mensaje = "Productos elegidos: \n";
    carrito.forEach(el =>{
        mensaje += `${el.nombre} - ${el.precio} \n`;
    })
    
    const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
    
    alert (mensaje + `\nTotal: ${total}`) 
}



// Menu


let opcion ;
opcion = parseInt(prompt("Elige la categoria: \n 1- Dulces \n 2- Pastas \n 3- Congelados \n 4-Panificacion \n 5- Ver carrito de compras \n 6-Salir \n 0- Salir"))

while (opcion != OPCION_SALIR){

    switch(opcion){
        case 1:
            verProductos("dulces");
            break;
        case 2:
            verProductos("pastas");
            break;
        case 3:
            verProductos("congelados");
            break;
        case 4:
            verProductos("panificacion");
            break;
        case 5:
            verCarrito();
            break;
        default:
            alert ("Opcion incorrecta")
            break;
        
    }
    opcion = parseInt(prompt("Elige la categoria: \n 1- Dulces \n 2- Pastas \n 3- Congelados \n 4-Panificacion \n 5- Ver carrito de compras \n 6-Salir"))
}




