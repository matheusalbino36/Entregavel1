const entrada = prompt("Digite a quantidade de termos N para a sequência de Fibonacci (N > 1):");
const n = parseInt(entrada);

if (isNaN(n) || n <= 0) {
    alert("Por favor, digite um número inteiro maior que 0.");
} else {
    const resultado = [];
    let anterior = 0;
    let atual = 1;

    for (let i = 0; i < n; i++) {
        resultado.push(anterior);
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    alert(`Os primeiros ${n} termos da sequência de Fibonacci são: ${resultado.join(", ")}`);
}
