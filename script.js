function calcularDesconto(){
    const peso = document.querySelector('#peso').value
    const percentualDesconto = document.querySelector('#percentual').value
    const percentualPeso = 100 - percentualDesconto
    const pesoTotal = (peso * 100) / percentualPeso
    const desconto = pesoTotal - peso

    document.querySelector('#resultado').innerHTML = `O peso bruto é de <strong>${pesoTotal.toFixed(2)}</strong> Kg, e o desconto é <strong>${desconto.toFixed(2)}</strong> Kg!`    
}
