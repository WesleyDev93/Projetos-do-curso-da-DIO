

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
    
    // Construção dos elementos para depois coloca-los em ordem. DIV PAI
      const ComponentRoot = document.createElement ("div");

    // Construção dos elementos para depois coloca-los em ordem.
      const cardLeft = document.createElement ("div");
      const cardRight = document.createElement ("div");
      const span = document.createElement ("span");
      const p = document.createElement ("p");
      const imagem = document.createElement ("img");



      //Adicionando atraves do appendChild que diz que eles são filhos do componentRoot 
      // que é a nossa div pai


      ComponentRoot.appendChild (cardLeft)
      ComponentRoot.appendChild (cardRight)
      cardLeft.appendChild (span)
      cardLeft.appendChild (p)
      cardRight.appendChild (imagem)

      // adicionando as classes pelo setAtributte as TAGS
  
      ComponentRoot.setAttribute ("class","card")
      cardLeft.setAttribute ("class","cardLeft")
      cardRight.setAttribute ("class","carRight")
      imagem.setAttribute ("class","imagem")
    

    // Setando o getAtributte para tornar os textos dinamicos
    // podemos usar o .href para links!

     span.textContent = "desenvolvido por" + (this.getAttribute ("autor") || "Anonimo");
     p.textContent = this.getAttribute ("texto")
     imagem.src = this.getAttribute ("foto") ||  "#"
     imagem.alt = "Dart vader"

      return ComponentRoot
       
    }


    // Aplica os estilos 
       styles() {
        
        const style = document.createElement ("style")
        style.textContent = `
        *{
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        
        
        
        .card {
        
        
            box-shadow: 10px 10px 10px transparent;
            display: flex;
            flex-direction: row;
            width: 100%;
        
        
        }
        
        
        .cardLeft {
        
            display: flex;  
            flex-direction: column;
            justify-content: center;
        }
        
        
        .cardLeft > h1 {
        
            font-size: 25px;
            margin-top: 15px;
            padding-left: 10px;
            text-align: center;
        }
        
        
        
        
        .cardLeft > p {
        
         color:  gray;
         padding-left: 10px;
         text-align: center;
         
        
        
        }
        
        
        
        .cardLeft > span {
        
        
            font-weight: 400;
            text-align: center;
           
            
         }
        
         .carRight {
        
        
            margin-left: 50px;
         }
        
        .imagem {
        
          
             width: 300px;
        }
        `
     

        return style // sempre rertornar não esquecer !
    }


}


customElements.define ('criar-card',criarCardNews)