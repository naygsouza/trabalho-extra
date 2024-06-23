document.getElementById('trianguloForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ler os valores dos inputs
    let lado1 = parseInt(document.getElementById('lado1').value);
    let lado2 = parseInt(document.getElementById('lado2').value);
    let lado3 = parseInt(document.getElementById('lado3').value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Verificar o tipo de triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            mostrarResultado("Triangulo Equilatero");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            mostrarResultado("Triangulo Isoceles");
        } else {
            mostrarResultado("Triangulo Escaleno");
        }
    } else {
        mostrarResultado("Nao forma um triangulo");
    }
});

function mostrarResultado(mensagem) {
    document.getElementById('resultado').textContent = mensagem;
}
