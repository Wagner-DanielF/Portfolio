document.getElementById("calcularBtn").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    const n4 = parseFloat(document.getElementById("n4").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        document.getElementById("resultadoTexto").textContent = "Por favor, preencha todas as notas.";
        return;
    }

    const media = (n1 + n2 + n3 + n4) / 4;
    document.getElementById("resultadoTexto").textContent = `A média é: ${media.toFixed(2)}`;
});

document.getElementById("limparBtn").addEventListener("click", function () {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";
    document.getElementById("resultadoTexto").textContent = "Insira as notas e clique em \"Calcular\".";
});