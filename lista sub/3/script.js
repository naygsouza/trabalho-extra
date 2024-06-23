function calcularNotas() {
    let valor = Number(document.querySelector("#valor").value); 
    const notas = [100, 50, 10, 5, 1];
    let resultado = '';

    for (let i = 0; i < notas.length; i++) {
        let quantidadeNotas = Math.floor(valor / notas[i]);
        valor = valor % notas[i];
        resultado += `${quantidadeNotas} nota(s) de ${notas[i]} reais<br>`;
    }

    document.getElementById('resultado').innerHTML = `<h3>Notas necessárias:</h3>Valor total: R$
     ${document.querySelector("#valor").value
  }<br>${resultado}`;
}
