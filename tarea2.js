//tarea//

var num11 = Math.round(Math.random()*100)
console.log("celcius:",num11)



function frahrenheit(a){
    return (a * 1.8)+32
}
var resul = frahrenheit(num11)
console.log("los celcius son:",num11,"al pasar a frahrenheit da:",resul)



function kelvin(a){
    return a + 273.15
}
var resul = kelvin(num11)
console.log("los celcius son:",num11,"al pasar a kelvin da:",resul)



function rankier(a){
    return (a * 1.8)+491.67
}
var resul = rankier(num11)
console.log("los celcius son:",num11,"al pasar a rakier da:",resul)




var a1 = Math.round(Math.random() * 100);
var b2 = Math.round(Math.random() * 100);
var c3 = Math.round(Math.random() * 100);
function raiz (a,b,c){
    var n1 = -b
    var n2 = b*b
    var n3 = 4 * a * c
    var n4 = a * 2
    var n5 = n2 - n3
    var n6 = n5 * n5
    var n7 = n1 + n6 
    var n8 = n7 / n4
    return n8
}
var resul = raiz(a1,c3,b2)
console.log('sabiendo que A es',a1, ' y C es',c3,' y B es',b2)
console.log('la forma cuadratica de A,B,C es:',resul)






