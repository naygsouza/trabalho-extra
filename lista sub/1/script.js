document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que o formulário recarregue a página

    // Ler os valores dos inputs
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let numero3 = parseInt(document.getElementById('numero3').value);
    let numero4 = parseInt(document.getElementById('numero4').value);
    let numero5 = parseInt(document.getElementById('numero5').value);

    let numeros = [numero1, numero2, numero3, numero4, numero5];

    // Verificar os valores são diferentes
    let unicos = new Set(numeros);
    if (unicos.size !== numeros.length) {
        alert("Todos os números devem ser diferentes.");
        return;
    }

    // Ordenar em ordem decrescente
    numeros.sort(function(a, b) {
        return b - a;
    });

    // Mostrar o resultado
    document.getElementById('resultado').textContent = "Os números em ordem decrescente são: " + numeros.join(', ');
});
