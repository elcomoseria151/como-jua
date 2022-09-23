

//llene un arreglo con numeros aleatorios de 0 a 100. el tamaño del arreglo debe tener un tamaño maximo de 20 elemento y minimo de 5//
let num= [];
let num1 = Math.round((Math.random()*20-5)+5)
for (i = 0; i<num1; i++){
    num[i]=Math.round(Math.random()*100)
}
console.log("el tamaño del arreglo es de:",num1)
console.log("los numeros dentro de este arreglo son:",num.sort())



/*
//suma de todos los elementos del arreglo
var suma = 0 
for(a=0; a<num.length; a++){
    suma += num[a]; 
}
console.log("la suma de todos los arreglos es:",suma)
*/


/*
//promedio del arreglo 
var promedio = suma / num1
console.log("el promedio del arreglo es:",promedio)

//valor maximo del arreglo  
console.log("el valor maximo del arreglo es: "+Math.max.apply(null,num));


//valor minimo del arreglo  
console.log("el valor minimo del arreglo es: "+Math.min.apply(null,num));
*/


/*
//hallar mediana
var mitad = num1 / 2
if(mitad%2==0){
    for (let b=0; b<mitad; b++)
     var restanumeros = num[b] - num[b+1]
     console.log(`Al ser el tamaño del arreglo par, se resta los dos numeros del medio y da,${restanumeros}`)
}else{ 
    for(let j=0; j<mitad; j++)
    var nummitad = num[j]
    console.log(`Al ser el tamaño del arreglo impar, la media es el numero de la mitad ${nummitad}`) 
}
*/ 


/*
//moda
var moda = 0
for(c=0; i<num.length; c++){
    if(num[c]==num[c+1]){
     moda++
    }
}
console.log(`las veces que se repite un numero en un arreglo es ${moda+1}`)
*/


/*
//Buscar un elemento en el arreglo. Diga si esta o no esta. Si esta repetido diga cuantas veces. 

var cont = 0
var numbus = 25 
for(let d=0; d<num.length; d++){
    if(numbus == num[d]){
        cont++
        console.log(`${numbus} si esta repetido en el arreglo y este se retire ${cont} vez`)
    }else{
        console.log(`${numbus} no se repite en el arreglo`)
    }
}
*/


/*
// permita añadir elementos al arreglo teniendo en cuenta el tope máximo

var numeros =  Math.round(Math.random()*10)
var numeros2 = []
for(f=0; f<numeros; f++){
    numeros2[f] = Math.round(Math.random()*10)
}
var total = num + numeros2

console.log(`el arreglo es ${num} y si le agregamos ${numeros2} el arreglo queda asi ${total   }`)
*/




