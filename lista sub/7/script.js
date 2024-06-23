let codigoItem = document.document.querySelector("#codigoItem");
    let quantidade = document.querySelector("quantidade");
let h3Resultado= document.querySelector("#h3Resultado")
    var preco;
function calcularPrecoItem (){
        case 'cachorro':
            preco = 11.00;
            break;
        case 'bauru':
            preco = 8.50;
            break;
        case 'misto':
            preco = 8.00;
            break;
        case 'hamburguer':
            preco = 9.00;
            break;
        case 'cheeseburguer':
            preco = 10.00;
            break;
        case 'refrigerante':
            preco = 4.50;
            break;
        default:
            alert('Código de item inválido!');
            return;
    

    let total = preco * quantidade;

    h3ResultadoElement.innerHTML = `Item: ${codigoItem}<br>
                                  Quantidade: ${quantidade}<br>
                                  Valor Total: R$ ${total.toFixed(2)}`;
}
btCalcular.onclick = function (){
    CalcularPrecoitem();
}