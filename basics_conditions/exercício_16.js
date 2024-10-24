// ==== Tempo de vida restante (fumante) ==== 

let cigarrosPorDia = 4
let anosFumando = 4
    
let totalCigarrosFumados = cigarrosPorDia * (anosFumando * 365);

let minutosPerdidos = totalCigarrosFumados * 10;

let diasPerdidos = minutosPerdidos / 1440;

console.log('Você perdera', diasPerdidos.toFixed(0), ' dias de vida se continuar fumando')