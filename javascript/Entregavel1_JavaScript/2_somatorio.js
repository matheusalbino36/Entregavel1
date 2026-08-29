const entrada = prompt("Digite os números separados por vírgula (ex: 1, 2, 3.5, 4):");
if (entrada) {
    const partes = entrada.split(",");
    const numeros = [];
    let resultado = 0;

    for (const parte of partes) {
        const valor = parseFloat(parte.trim());
        if (!isNaN(valor)) {
            numeros.push(valor);
            resultado += valor;
        }
    }

    alert(`O somatório dos números [${numeros.join(", ")}] é: ${resultado}`);
} else {
    alert("Nenhum número foi inserido.");
}
