



let saldoCarteira = parseFloat(prompt("Qual seu saldo atual ?"));

const valorDeposito = parseFloat(prompt("Qual o valor do deposito?"));


const valorRetirada = parseFloat(prompt("Qual o valor de saque ?"));



function depositar (saldoAtual = 0,valorDeposito) {

    if (saldoCarteira <= saldoAtual ) {
         
        let saldoRestante =  saldoCarteira + valorDeposito  

         alert ("Seu saldo atual é " + saldoRestante )

      
}
}
depositar ()
    




      

