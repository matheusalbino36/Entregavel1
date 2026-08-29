const entradaDados = prompt("Digite o conjunto de dados (números separados por vírgula, ex: 2, 5, 7.5, 3, 10, 1, 4):");
const entradaN = prompt("Digite o valor limite N:");

if (entradaDados && entradaN) {
    const partes = entradaDados.split(",");
    const dados = [];
    for (const parte of partes) {
        const valor = parseFloat(parte.trim());
        if (!isNaN(valor)) {
            dados.push(valor);
        }
    }
    const N = parseFloat(entradaN);

    if (isNaN(N)) {
        alert("Valor N inválido.");
    } else {
        let total = 0;
        const primeiro = dados[0];
        const inicio = Math.min(primeiro, N);
        const fim = Math.max(primeiro, N);

        for (const valor of dados) {
            if (Number.isInteger(valor) && valor >= inicio && valor <= fim) {
                total++;
            }
        }

        alert(`No conjunto [${dados.join(", ")}], há ${total} valor(es) inteiro(s) entre o 1º elemento (${dados[0]}) e N (${N}).`);
    }
} else {
    alert("Entradas inválidas.");
}
