// Componentes são arquivos JS que retornam mais HTML CSS E JS  dentro do DOM.


// Traz a extensão do nosso HTML
class  cardNews extends HTMLElement {

    // Chamamos o constutor

    constructor () {

        // faz chamada de quem ele esta herdando , no caso nosso construtor

        super() 

        // vamos criar a nosso sombra (shadow) - temos 2 opções :
        // open e closed :  aberto para manipular por outro JS , mas closed seria ao contrario.

        
        const shadow = this.attachShadow ( {mode: "open"})

        // Construindo a TAG

        shadow.innerHTML = '<h1>Hello Word</h1>';


    }

}  

// define nosso elemento pela classe , devemos chamar nosso JS apos o link do CSS se houver + comando defer
// apos isso podemos ir ao nosso HTML e tratar pela classe nosso elemento como uma TAG <card-news></card-news>


customElements.define ("card-news", cardNews)

