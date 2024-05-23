 var result = 0
 
 function digiteONumero(x){
    const valortextual = x.toString()
   
    for( let t of valortextual){

        result = Number(t) + result
    }
    console.log(result)

}

digiteONumero(333)