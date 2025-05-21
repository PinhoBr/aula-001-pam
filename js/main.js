function calcular(){
    let resultado = document.getElementById("resultado")
    let numero = parseFloat(document.getElementById("numero").value)
    let porcentagem = parseFloat(document.getElementById("porcentagem").value)

    let calculo = numero * (porcentagem/100)
    resultado.innerHTML = porcentagem + "% de " + numero + " é " + calculo
}

