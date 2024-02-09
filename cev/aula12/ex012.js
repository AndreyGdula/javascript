var atual = new Date()
var hora = atual.getHours()

if (hora >= 6 && hora < 12) {
    console.log(`São ${hora} horas, portanto BOM DIA!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`São ${hora} horas, portanto BOA TARDE!`)
} else if (hora >= 18 &&  hora <= 24) {
    console.log(`São ${hora} horas, poranto BOA NOITE!`)
} else if (hora < 6) {
    console.log(`São ${hora} horas, portanto BOA MADRUGADA!`)
}