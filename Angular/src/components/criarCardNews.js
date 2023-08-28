

class criarCardNews extends HTMLElement {

    constructor () {

        super();


        const shadow = this.attachShadow ({mode: "open"})
      
        // pega tudo o que tiver na build e no styles e envia para a shadow
        shadow.appendChild (this.build());
        shadow.appendChild (this.styles());
        
        


    }

    // constroi a parte dos elementos

    build () {
    
    // Construção dos elementos para depois coloca-los em ordem.
      const ComponentRoot = document.createElement ("div");

      // adicionando as classes pelo setAtributte as TAGS
  
       ComponentRoot.setAttribute ("class","card")
       cardLeft.setAttribute ("class","cardLeft")
       cardRight.setAttribute ("class","carRight")

    // Construção dos elementos para depois coloca-los em ordem.
      const cardLeft = document.createElement ("div");
      const cardRight = document.createElement ("div");


      //Adicionando atraves do appendChild que diz que eles são filhos do componentRoot 
      // que é a nossa div pai


      ComponentRoot.appendChild (cardLeft)
      ComponentRoot.appendChild (cardRight)

    


      return ComponentRoot
       
    }


    // Aplica os estilos 
    styles () {


    }


}


customElements.define ('criar-card',criarCardNews)