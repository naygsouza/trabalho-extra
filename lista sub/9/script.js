let preco = document.querySelector("#preco");
let condicao = document.querySelector("#condicao");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularPagamento() {
    let precoValue = parseFloat(preco.value);
    let condicaoValue = condicao.value;
    let valorFinal;

    switch(condicaoValue) {
        case 'a':
            valorFinal = precoValue * 0.90; // 10% de desconto
            break;
        case 'b':
            valorFinal = precoValue * 0.85; // 15% de desconto
            break;
        case 'c':
            valorFinal = precoValue; // Preço normal, sem juros
            break;
        case 'd':
            valorFinal = precoValue * 1.10; // 10% de juros
            break;
    }

    h3Resultado.innerText = O valor a ser pago é R$ ${valorFinal.toFixed(2)};
}

btCalcular.onclick = function() {
    calcularPagamento();
}