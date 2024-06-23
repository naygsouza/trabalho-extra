
document.addEventListener('DOMContentLoaded', function() {
    let btCalcular = document.querySelector('#btCalcular');
    
    btCalcular.addEventListener('click', function() {
        let anoFabricacao = parseInt(document.getElementById('anoFabricacao').value);
        let valorTabela = parseFloat(document.getElementById('valorTabela').value);
        
        let taxa;
        if (anoFabricacao < 1990) {
            taxa = 0.01;
        } else {
            taxa = 0.015;
        }
        
        let imposto = valorTabela * taxa;
        let impostoFormatado = imposto.toFixed(2);
        
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `<h3>Imposto a ser pago:</h3>R$ ${impostoFormatado}`;
    });
});

