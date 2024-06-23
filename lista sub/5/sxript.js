let cargo = document.querySelector("#cargo");
let salario = document.querySelector("#salario");
let btCalcular = document.querySelector('#btCalcular');
let h3Resposta = document.querySelector("#h3Resposta");

function calcularSalario() {
    let salarioAtual = Number(salario.value); 
    let cargoValue = cargo.value;

    let tabelaAumento = {
        'gerente': 0.1,
        'analista': 0.08,
        'assistente': 0.05
    };

    let aumentoPercentual;

    if (cargoValue in tabelaAumento) { 
        aumentoPercentual = tabelaAumento[cargoValue]; 
    } else {
        aumentoPercentual = 0.4;
    }

    let novoSalario = salarioAtual * (1 + aumentoPercentual);
    let diferenca = novoSalario - salarioAtual;

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <h3>Resultados:</h3>
        <p>Salário Antigo: R$ ${salarioAtual.toFixed(2)}</p>
        <p>Novo Salário: R$ ${novoSalario.toFixed(2)}</p>
        <p>Diferença: R$ ${diferenca.toFixed(2)}</p>
    `;
}

btCalcular.addEventListener('click', function() {
    CalcularSalario();
});
