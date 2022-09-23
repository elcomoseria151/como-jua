
palabra = 'ASSasasHJKHKHKJHKJH'
function general(cb1,cb2,vec) {
mayor = vec.toUpperCase()
menor = vec.toLowerCase()
mayuscula = cb1(vec)
minuscula= cb2(vec)
console.log(`la cadena de texto tiene ${mayuscula} mayusculas y  ${minuscula} minusculas`)
console.log(mayor)
console.log(menor)
console.log(vec)

}

function contamayuscula(vec){
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for(let i = 0; i<vec.length; i++){
        if(vec[i]==mayus[i] && vec[i]!=minus[i]){
            m++
        }
        
    }
     return m
}

function contarminus (vec){
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for(let i = 0; i<vec.length; i++){
        if(vec[i]!=mayus[i] && vec[i]==minus[i]){
            m++
        }
        
    }
     return m
}

general(contamayuscula,contarminus,palabra)






