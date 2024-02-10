var vetor = []

function add() {
    var num = Number(document.querySelector("input#num").value)
    var tab = document.querySelector("select#tab")
    var op = document.createElement("option")

    if (num < 0 || num > 100 || vetor.indexOf(num) != -1) {
        alert('[ERRO] O valor inserido está incorreto!')
    } else {
        vetor.push(num)
        op.text = `Valor ${num} adicionado`
        tab.appendChild(op)
        
    }
    res.innerHTML = ''
}

function finalizar() {
    var res = document.querySelector("div#res")

    console.log(vetor)
    res.innerHTML = `<p>Foram adicionados ${vetor.length} elementos</p>`
    res.innerHTML += `<p>O maior valor informado foi: ${max()}</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${min()}</p>`
    res.innerHTML += `<p>Somando todos os valores temos: ${soma()}</p>`
    res.innerHTML += `<p>A média dos valores é: ${media(soma())}</p>`
}

function max() {
    vetor.sort()
    var len = vetor.length
    var max = vetor[len-1]
    console.log(`Max: ${max}`)
    return max
}

function min() {
    vetor.sort()
    var min = vetor[0]
    console.log(`Min: ${min}`)
    return min
}

function soma() {
    var res_soma = 0

    for (let s in vetor) {
        res_soma += vetor[s]
    }
    console.log(`Soma: ${res_soma}`)
    return res_soma
}

function media(soma) {
    var media = soma / vetor.length
    console.log(`Média: ${media}`)
    return media.toFixed(2)
}