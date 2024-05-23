function verificarAnoBissexto(x) {

    if(x%400 == 0 || x % 4 ==0 && x%100 !== 0 ){
        return true
    }else{
        return false
    }
    
}

console.log(verificarAnoBissexto(2024))
console.log(verificarAnoBissexto(2025))