function load() {
    var atual = new Date()
    var hora = atual.getHours()

    var estilo = document.querySelector('p#hora')
    var image = document.querySelector('img#img')
    var body = document.querySelector('body')

    estilo.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora < 12) {
        image.src = "img/manha.jpg"
        body.style.background = "rgb(255, 252, 159)"
    } else if (hora >= 12 && hora < 18) {
        image.src = "img/tarde.jpg"
        body.style.background = "#cc8103"
        body.style.color = "white"
    } else if (hora < 6 || hora >= 18) {
        image.src = "img/noite.jpg"
        body.style.background = "#285487"
        body.style.color = "white"
    }
}