//Entradas del problema
/*

Comentario de bloque

*/
//ENTRADAS==VARIABLES==CONSTANTES

/*let nombreProducto='Libros Saga Completa'
let precioProducto=700000
let pesoProducto=500
let tieneDescuento=true
let descripcionProducto="Libros Originales edicion Salamandra del 1 al 10"
let telVendedor="3177201647"


const NOMBRE_CLIENTE="Maria Fernanda"

// arreglos unidimensionales (vectores)
// sirven para almacenar varios elementos en 1 sola variable
let productos=['Libros,Camiseta,Morral']
let productos2=Array("Libros,Camiseta,Morral") 




//"SALIDAS
console.log("Buenas")
console.log(nombreProducto)
console.log("Su nombre es: " +NOMBRE_CLIENTE+ " y su producto es: "+nombreProducto)
console.log(`su nombre es: ${NOMBRE_CLIENTE} y su producto es: ${nombreProducto}`)
console.log(productos)
console.log(productos2)*/

//1.crear una variable para guardar una etiqueta

let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)


//2. como modificar el texto de una etiqueta
etiquetaTitulo.textContent="VOLDI :)"

let menuVar = document.getElementById("menu")
menuVar.textContent="Menu"

//controlando una foto
let etiquetaFoto = document.getElementById("fotoHp")
etiquetaFoto.scr = "/img/legoharrypotter.png"

//Cambiar el estilo de la etiquieta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")

//tienda
let productosNombre=["libros","camiseta voldi"]
let productosPrecio=[500000,90000]
let productosPromocion=[true, false]

console.log(productosNombre[1])

//creando objetos de js [cajas-arreglo]{objetos}
let usuario=
{
    nombre:"Bruno Mars", 
    edad : 28,
    amigos : ["hermione"," ronald","harry"]
}

console.log(usuario)
console.log(usuario.nombre[1])


