var idade = 67

if (idade < 16) {
    console.log(`Você tem ${idade} anos e NÃO pode votar!`)
} else if (idade < 18 || idade >= 67) {
    console.log(`Você tem ${idade} anos e o voto é OPCIONAL!`)
} else {
    console.log(`Você tem ${idade} anos e DEVE votar!`)
}