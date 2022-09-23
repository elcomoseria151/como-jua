var c = Math.round(Math.random() * 5)
console.log("el elemento a eleminiar es:", c)
console.log("menu")
let menu = {
    0: "agregar producto",
    1: "eliminar producto",
    2: "ordenar producto",
    3: "sobre escribir un producto",
    4: "buscar producto",
    5: "salir"
}
console.log(menu);
var num = Math.round(Math.random() * 5)
let i = num
console.log("menu escogido:", menu[i])
let frut = ["frijol", "lenteja", "azucar", "cafe", "huevo", "lenteja", "manzana", "banano", "platano", "sugar"];
switch (i) {
    case 0:
        console.log("agreagar productos")
        console.log("productos")
        console.log(frut)

        console.log("productos nuevos")
        const frutnue = ["coffe", "lente"]
        console.log(frutnue)

        console.log("productos ya agregados")
        frut.push("coffe", "lente")
        console.log(frut)
        break;
    case 1:
        console.log("productos")
        console.log(frut)
        console.log("eliminar", frut[c])
        frut.splice([c])
        break;
    case 2:
        console.log("productos")
        console.log(frut)
        console.log("ordenar productos")
        frut.sort();
        console.log(frut)
        break;
    case 3:
        console.log("productos")
        console.log(frut)
        console.log("cambiar frijol por arroz")
        let nuefru = "arroz"
        frut[0] = nuefru
        console.log(frut)
        break;
    case 4:
        console.log("productos")
        console.log(frut)
        console.log("bucar producto")
        console.log(frut[2])
        break;
    case 5:
        system.exit(menu[5])
        break;
}
