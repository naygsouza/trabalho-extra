let nivel = document.querySelector("#nivel");
let horas = document.querySelector("#horas");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularSalario() {
    
    let nivelValue = parseInt(nivel.value);
    let horasValue = parseFloat(horas.value);
    let valorHoraAula;
    let salario;


    switch(nivelValue) {
        case 1:
            valorHoraAula = 12.00;
            break;
        case 2:
            valorHoraAula = 17.00;
            break;
        case 3:
            valorHoraAula = 25.00;
            break;
    }