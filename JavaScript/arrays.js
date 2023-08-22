


let numeros = [];






function incluirDados(input) {
    
    if (input) {
        numeros.push(input); 
    }

    alert (numeros);
    
}

console.log (numeros);

    
const input = Number(prompt("Digite o numero que sera incluido no array"));
incluirDados(input);


0