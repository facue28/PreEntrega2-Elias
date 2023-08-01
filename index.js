const OPCION_SALIR = 7;

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

const carrito = [];
let total = 0;


const vistaProductos = []

const productoElegido = (opcion) => {
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
    } 
    vistaProductos.splice(0,vistaProductos.length);
}

const verProductos = () => {
    let opcion;
    opcion = parseInt(prompt("Elige la categoria: \n 1- Dulces \n 2- Pastas \n 3- Congelados \n 4-Panificacion  \n 5 - Modificar carrito \n 6- Ver carrito \n 7 - Volver al menu principal"))
    while (opcion !== OPCION_SALIR){
        switch(opcion){
            case 1:
                productoElegido("dulces");
                break;
            case 2:
                productoElegido("pastas");
                break;
            case 3:
                productoElegido("congelados");
                break;
            case 4:
                productoElegido("panificacion");
                break;
            case 5:
                modificarCarrito(); 
                break;
            case 6:
                verCarrito();
            default:
                break;
            
        }
        opcion = parseInt(prompt("Elige la categoria: \n 1- Dulces \n 2- Pastas \n 3- Congelados \n 4-Panificacion  \n 5 - Modificar carrito \n 6- Ver carrito \n 7 - Volver al menu principal"))

    }
}


// }
const verCarrito = () => {
    mensaje = "Productos elegidos: \n";
    carrito.forEach(el =>{
        mensaje += `${el.id} -${el.nombre} - ${el.precio} \n`;
    })
    total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
    alert (mensaje + `\n Total: ${total}`) 

}

const modificarCarrito = () => {
    let opcionEliminar = prompt("Desea eliminar un producto? \n Ingrese (SI/NO)");

    if (opcionEliminar.toLocaleUpperCase() === "SI") {
        mensaje = "Productos elegidos: \n";
        carrito.forEach((el) => {
            mensaje += `${el.id} -${el.nombre} - ${el.precio} \n`;
        });
        idObj = parseInt(prompt("Ingrese Id del producto a eliminar \n" + mensaje));
        indexObj = carrito.findIndex(el => el.id === idObj);
        if (indexObj != -1) {
            carrito.splice(indexObj, 1);
                alert("Producto eliminado.");
        } else {
            alert("Id incorrecto");
        }
    } else {
        alert("Presione enter para volver");
    }
};


const pagar = () => {
    let opcion;
    opcion = parseInt(prompt("Elige metodo de pago :\n 1 - (1) Cuota  \n 2 - (2) Cuotas \n 3 - (3) Cuotas \n 4 - Efectivo "))
        switch(opcion){
            case 1:
                cuota1 = (total / opcion) * 1.04;
                alert (`1 cuota de ${cuota1} `)
                break;
            case 2:
                cuota2 = (total / opcion) *   1.06;
                alert (`2 cuota de ${cuota2} \n Total : ${cuota2*opcion}`)
                break;
            case 3:
                cuota3 = (total / opcion) * 1.10;
                alert (`3 cuotas de ${cuota3}\n Total : ${cuota3*opcion}`)
                break;
            case 4:
                alert (total)
                break;
            default:
                alert("Ingreso una opcion invalida")
                break
        }
    }


// Menu


// let opcion ;

let opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1- Productos \n 2- Ver Carrito \n 3- Pagar \n 7- Salir"))

while (opcion != OPCION_SALIR){
    switch (opcion) {
        case 1:
            verProductos();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            pagar();
            break;
        case 7:
            OPCION_SALIR
            break;
        default:
            alert("Ingreso una opcion invalida")
            break;
    }
    opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1- Productos \n 2- Ver Carrito \n 3- Pagar \n 7- Salir"))
}
