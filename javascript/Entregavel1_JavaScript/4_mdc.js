const entradaA = prompt("Digite o primeiro número inteiro (a):");
const entradaB = prompt("Digite o segundo número inteiro (b):");

let a = Math.abs(parseInt(entradaA));
let b = Math.abs(parseInt(entradaB));

if (isNaN(a) || isNaN(b)) {
    alert("Por favor, digite números inteiros válidos.");
} else {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }

    alert(`O Máximo Divisor Comum (MDC) entre ${parseInt(entradaA)} e ${parseInt(entradaB)} é: ${a}`);
}
