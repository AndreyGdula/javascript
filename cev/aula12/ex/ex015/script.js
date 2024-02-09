function verificar() {
    var atual = new Date()
    var data = atual.getFullYear()
    var ano = document.querySelector("input#ano")
    var ano = Number(ano.value)
    var section = document.querySelector("section")
    var div = document.querySelector("div#res")
    var res = document.querySelector("p#res-ano")
    var img = document.querySelector("img#img")
    var sex = document.querySelector("input[name='sexo']:checked").value

    section.style.height = "400px"
    div.style.display = "block"
    
    if (ano > data) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = `Ano inserido está incorreto`
        img.src = 'img/error.jpg'
        console.log('[ERRO] Ano incorreto!')

    } else {
        var idade = data - ano
        res.innerHTML = `Você têm ${idade} anos`
        console.log(`Idade ${idade} | Sexo: ${sex}`)

        if (sex === "M" && idade < 12) {
            img.src = 'img/criança-menino.jpg'
            console.log('Criança')
        } else if (sex === "F" && idade < 12) {
            img.src = 'img/criança-menina.jpg'
            console.log('Criança')
        } else if (sex === "M" && idade < 21) {
            img.src = 'img/ados-m.jpg'
            console.log('Adolescente')
        } else if (sex === "F" && idade < 21) {
            img.src = 'img/ados-f.jpg'
            console.log('Adolescente')
        } else if (sex === "M" && idade < 60) {
            img.src = 'img/adulto-homem.jpg'
            console.log('Adulto')
        } else if (sex === "F" && idade < 60) {
            img.src = 'img/adulto-mulher.jpg'
            console.log('Adulto')
        } else if (sex === "M" && idade >= 60) {
            img.src = 'img/idoso.jpg'
            console.log('Idoso')
        } else if (sex === "F" && idade >= 60) {
            img.src = 'img/idosa.jpg'
            console.log('Idosa')
        }
    }
}