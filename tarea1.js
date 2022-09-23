//1
var a = Math.round(Math.random() * 100);
console.log(a)


//2
var celcius = Math.round(Math.random() * 100);
var frahrenheit = (celcius * 1.8)+32
var kelvin = celcius + 273.15
var rankine = (celcius * 1.8)+491.67
console.log(celcius,'a;',frahrenheit)
console.log(celcius,'a;',kelvin)
console.log(celcius,'a;',rankine)



//3
//valor inicial//
var Bog_Medellin = 415
var bog_cali = 469
var bog_catargena = 1.038 
var bog_santamarta = 953
var bog_barranquilla = 1.000

//kilometros a decametros//
var DecaBog_medellin = Bog_Medellin * 100
var DecaBog_cali = bog_cali * 100
var DecaBog_cartagena = bog_catargena * 100
var DecaBog_santamarta  = bog_santamarta * 100
var DecaBog_barranquilla = bog_barranquilla *100


//resultado km a decametros//
console.log('los kilometros de bogota a medellin son:',Bog_Medellin,'y de estos a decametros son:',DecaBog_medellin)
console.log('los kilometros de bogota a medellin son:',bog_cali,'y de estos a decametros son:',DecaBog_cali)
console.log('los kilometros de bogota a medellin son:',bog_catargena,'y de estos a decametros son:',DecaBog_cartagena)
console.log('los kilometros de bogota a medellin son:',bog_santamarta,'y de estos a decametros son:',DecaBog_santamarta)
console.log('los kilometros de bogota a medellin son:',bog_barranquilla,'y de estos a decametros son:',DecaBog_barranquilla)

//kilometros a metros//
var metBog_medellin = Bog_Medellin * 1000
var metBog_cali = bog_cali * 1000
var metBog_cartagena = bog_catargena * 1000
var metBog_santamarta  = bog_santamarta * 1000
var metBog_barranquilla = bog_barranquilla *1000

//resultado km a metros//
console.log('los kilometros de bogota a medellin son:',Bog_Medellin,'y de estos a metros son:',metBog_medellin)
console.log('los kilometros de bogota a medellin son:',bog_cali,'y de estos a metros son:',metBog_cali)
console.log('los kilometros de bogota a medellin son:',bog_catargena,'y de estos a metros son:',metBog_cartagena)
console.log('los kilometros de bogota a medellin son:',bog_santamarta,'y de estos a metros son:',metBog_santamarta)
console.log('los kilometros de bogota a medellin son:',bog_barranquilla,'y de estos a metros son:',metBog_barranquilla)

//kilometros a centimetros//
var cenBog_medellin = Bog_Medellin * 100000
var cenBog_cali = bog_cali * 100000
var cenBog_cartagena = bog_catargena * 100000
var cenBog_santamarta  = bog_santamarta * 100000
var cenBog_barranquilla = bog_barranquilla *100000

//resultado km a centimetros//
console.log('los kilometros de bogota a medellin son:',Bog_Medellin,'y de estos a centimetros son:',cenBog_medellin)
console.log('los kilometros de bogota a medellin son:',bog_cali,'y de estos a centimetros son:',cenBog_cali)
console.log('los kilometros de bogota a medellin son:',bog_catargena,'y de estos a centimetros son:',cenBog_cartagena)
console.log('los kilometros de bogota a medellin son:',bog_santamarta,'y de estos a centimetros son:',cenBog_santamarta)
console.log('los kilometros de bogota a medellin son:',bog_barranquilla,'y de estos a centimetros son:',cenBog_barranquilla)



//4
var A = Math.round(Math.random() * 100);
var B = Math.round(Math.random() * 100);
var C = Math.round(Math.random() * 100);
var n1 = -B
var n2 = B*B
var n3 = 4 * A * C
var n4 = A * 2
var n5 = n2 - n3
var n6 = n5 * n5
var n7 = n1 + n6 
var n8 = n7 / n4
console.log('sabiendo que A es',A, ' y C es',C,' y B es',B)
console.log('la forma cuadratica de A,B,C es:',n8)



//5

//suma
var n1 = Math.round(Math.random() * 50);
var n2 = Math.round(Math.random() * 50);
var n3 = Math.round(Math.random() * 50);
var n4 = n1 + n2
var resul = n4 / n3   
console.log(resul)


//resta
var n1 = 8 
var n2 = 5
var n3 = 9
var n4 = n1 - n2
var resul = n4 / n3   
console.log(resul)


//multiplicacion
var n1 = 5
var n2 = 2
var n3 = 9
var n4 = 7
var n5 = n1 * n2
var n6 = n3 * n4 
var resul = n5 / n6   
console.log(resul)
