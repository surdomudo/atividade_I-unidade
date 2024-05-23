var palavra = "texto"
var palavra2 = "ovo"

function  verificarPalindromo(p){
    var caracters = p.length
    var inverso = ""

    for(var i = caracters-1; i >= 0; i--){

        inverso = inverso + p[i]
        console.log(p[i])

    }

    console.log(inverso);

    if(inverso === p ){
        return true
    }else{
        return false
    }
  

}

console.log(verificarPalindromo(palavra));
console.log(verificarPalindromo(palavra2));