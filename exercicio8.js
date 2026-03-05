function verificarPrimo(numero) {
    if (numero <= 1) {
        return false; 
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;  
        }
    }
    return true;
}

console.log("O número 7 é primo? " + verificarPrimo(7));

verificarPrimo(8)