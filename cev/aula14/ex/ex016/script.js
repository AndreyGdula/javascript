function contagem() {
    var inicio = document.querySelector("input#inicio").value
    var inicio = Number(inicio)
    var fim = document.querySelector("input#fim").value
    var fim = Number(fim)
    var intervalo = document.querySelector("input#inter").value
    var intervalo = Number(intervalo)
    var res = document.querySelector("p#res")
    var section = document.querySelector("section")

    res.innerHTML = ''

    if (inicio == 0 && fim == 0 || intervalo == 0 || intervalo.length == 0) {
        alert('[ERRO] Os valores inseridos estão incorretos! Tente novamente.')
    } else if (inicio < fim) {
        for(let c = inicio; c <= fim; c += intervalo) {
            res.innerHTML += `${c} \u{02192} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else if (inicio > fim) {
        for(let c = inicio; c >= fim; c -= intervalo) {
            res.innerHTML += `${c} \u{02192} `
        }
        res.innerHTML += `\u{1F3C1}`
    }
}   