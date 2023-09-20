
var calculoIMC = require('./modulo/calcularIMC.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual seu peso em kg?: ', function(valorPeso){
    let peso = valorPeso

    entradaDeDados.question('Qual a sua altura?: ', function(valorAltura){
        let altura = valorAltura

        // chama a função do IMC encaminhando os valores que o usuário digitou
        let imc = calculoIMC.calculoIMC(peso, altura)
        let pesoIMC

        if(imc){
            pesoIMC = calculoIMC.verifIMC(imc)
            console.log('IMC: ' + String(imc.toFixed(2)) + pesoIMC)
        }

        entradaDeDados.close()
    })
})