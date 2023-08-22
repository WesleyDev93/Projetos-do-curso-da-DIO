


const input =  Number(prompt("Selecione a operação 1 - soma ,  2 - subitração,  3 -multipliação,  4 - potenciação"));


console.log (input); 


let pegaNumero1 = Number(prompt("Digite o numero 1"));
let pegaNumero2 = Number(prompt("Digite o numero 2"));
let resultado;

console.log(pegaNumero1, pegaNumero2);
   



function ValidaDados() {
    
    if (input <= 0) {
        alert("Escolha errada");
        calculaDados();
    }
}











function calculaDados () {
    
    if (input == 1) {    
        resultado = pegaNumero1 + pegaNumero2;
    }else if (input == 2) {
        resultado = pegaNumero1 - pegaNumero2;
    }else if (input == 3) {
        resultado = pegaNumero1 * pegaNumero2;
    }else if (input == 4) {
        resultado = pegaNumero1 ** pegaNumero2;
    }

    console.log(resultado);

}




calculaDados();
ValidaDados ();