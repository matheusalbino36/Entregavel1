const entrada = prompt("Digite um número inteiro positivo para verificar se é primo:");
const n = parseInt(entrada);

if (isNaN(n)) {
    alert("Por favor, digite um número válido.");
} else {
    let primo = n > 1;

    if (primo && n !== 2 && n % 2 === 0) {
        primo = false;
    }

    for (let divisor = 3; primo && divisor * divisor <= n; divisor += 2) {
        if (n % divisor === 0) {
            primo = false;
        }
    }

    if (primo) {
        alert(`O número ${n} É primo.`);
    } else {
        alert(`O número ${n} NÃO é primo.`);
    }
}
