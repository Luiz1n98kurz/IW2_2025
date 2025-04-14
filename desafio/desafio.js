let ListaPresenca =["sofia", "Mariana", "Beatriz", "Isabelly"];

function verificaPresenca(nome) {
    if (ListaPresenca.includes(nome)) {
        return nome + "está presente.";
    } else {
        return nome + "não esta na lista.";
    }   
}

console.log(verificaPresenca("Guilherme"))
console.log(verificaPresenca("Isabelly"))
console.log(verificaPresenca("Adolf"))
console.log(verificaPresenca("Sofia"))