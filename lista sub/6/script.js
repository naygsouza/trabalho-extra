let valorCredito= document.querySelector("#valorCredito");
let saldoMedio = document.querySelector("#saldoMedio");
let h3Resultado = document.querySelector ("h3Resultado");

function calcularCredito() {
    let saldoMedio = number('saldoMedio'.value);
    let valorCredito;

    if (saldoMedio <= 200) {
        valorCredito = saldoMedio * 0.1; // 10% do saldo médio
    } else if (saldoMedio <= 300) {
        valorCredito = saldoMedio * 0.2; // 20% do saldo médio
    } else if (saldoMedio <d= 400) {
        valorCredito = saldoMedio * 0.25; // 25% do saldo médio
    } else {
        valorCredito = saldoMedio * 0.3; // 30% do saldo médio
    }

    h3resultado.innerHTML = `Saldo médio informado: R$ ${saldoMedio.toFixed(2)} <br>
                           Valor do crédito especial: R$ ${valorCredito.toFixed(2)}`;
}
btCalcular.onclick= function (){
    calcularCredito();
}
