function tab() {
    var tab = Number(document.querySelector("input#num").value)
    var sel = document.querySelector("select#seltab")

    sel.innerHTML = ''
    for (var t = 1; t <= 10; t++) {
        var op = document.createElement('option')
        op.text = `${tab} x ${t} = ${tab * t}`
        sel.appendChild(op)
    }
}