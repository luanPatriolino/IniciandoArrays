const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6,5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0 )
    return somaDasNotas/notasDaSala.length
}
console.log(mediaSala(salaPython))
console.log(mediaSala(salaJava))
console.log(mediaSala(salaJS))


//Exemplos

/*const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma)*/