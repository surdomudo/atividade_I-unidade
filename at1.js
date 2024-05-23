var nome = "Edson Mendes"
console.log(nome)
var totalDeVogais = 0
var tatalConsoantes = 0

function contarVogaisConsoantes(x){
    for(var i = 0; i < x.length; i++){

        var totaDeCharacter = x.length 

        // console.log("letra:"+x[i])

        if(x[i].trim() === ""){
            continue
        }else if(x[i].toLowerCase() ===  "a"){
            totalDeVogais++
            continue
        }else if(x[i].toLowerCase() === "e"){
            totalDeVogais++
            continue
        }else if(x[i].toLowerCase() === "i"){
            totalDeVogais++
            continue
        }else if(x[i].toLowerCase() === "o"){
            totalDeVogais++
            continue
        }else if(x[i].toLowerCase() === "u"){
            totalDeVogais++
            continue
        }
    }

    // console.log(totaDeCharacter)
    // console.log(totalDeVogais)

     tatalDeConsoantes = totaDeCharacter - totalDeVogais
     let total = "total de vogais ingual a: "+totalDeVogais+ " // total de consoantes ingual a: "+ tatalDeConsoantes
       
     return total
}
   
console.log(contarVogaisConsoantes(nome))