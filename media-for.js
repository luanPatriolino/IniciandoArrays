const notas = [10, 6.5, 8, 7.5];
console.log(notas[1])

let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas/notas.length

console.log(media)