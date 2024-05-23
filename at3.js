
function fatorialDe(x){
    var retornarFatorial = 1
      
    if(x > -1){

       for(var i = 2 ; i <= x ; i++){

          retornarFatorial *= i

        }
        return retornarFatorial
    }else{
        return `informe um numero positivo!`
    }
       
}

console.log(fatorialDe(-5))