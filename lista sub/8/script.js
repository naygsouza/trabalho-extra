let altura= document.querySelector  ("#altura ");
let sexo= document.querySelector ("#sexo); 
let h3Resultado = ("#h3Resultado)

function calcularPesoIdeal ()[

    let pesoIdeal;
    if (sexo === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

 h3Resultado.innerText = O peso ideal é ${pesoIdeal.toFixed(2)} kg;
}
btCalcular. onclick = function () [
calcularPesoIdeal ();
]