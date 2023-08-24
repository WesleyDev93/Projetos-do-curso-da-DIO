

let numeros = 0;

let visor = document.querySelector ('.visor');
let botao = document.querySelector ('.botao');

adicionaMaisUm();



function adicionaMaisUm() {
      

    botao.addEventListener ("click", function () {

      numeros =+  1;

      
        visor.textContent = numeros;
    } );
}




console.log (numeros)