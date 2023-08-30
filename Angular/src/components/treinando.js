

class treinando extends HTMLElement {

    constructor () {
      

        super();

        const shadow = this.attachShadow ({mode: "open"});

        shadow.appendChild (this.build());
        shadow.appendChild (this.styles());

    }


    build () {
    
        const divPai = document.createElement ("div");
        const titulo = document.createElement ("h1");
        const texto = document.createElement ("p");
        const botao = document.createElement ("button");

        


        divPai.appendChild (titulo)
        divPai.appendChild (texto)
        divPai.appendChild (botao)



        divPai.setAttribute ("class", "pai")
        titulo.setAttribute ("class","titulo")
        texto.setAttribute  ("class", "texto")
        botao.setAttribute ("class", "botao")


        titulo.textContent = this.getAttribute ("titulo");
        texto.textContent = this.getAttribute ("texto");
        botao.textContent = this.getAttribute ("botao");

        botao.addEventListener ("click", () =>{

            alert ("o botao esta funcionando corretamente!")
        })

        
        return divPai
    }



    styles () {

        const style = document.createElement ("style")
        style.textContent = 
          `

          .pai {

            display:flex;
            justify-content:center;
            flex-direction:column;
          }
          .titulo {

            text-align:center;
            color:red;
        }
          .texto {

            text-align:center;
          }

            .botao {

                color:blue;
                border-radius:15px;
                padding:5px;
                margin: auto;
            }
          
          
          
          
          
          
          
          `
       
       return style
     }

}

 customElements.define ('treinando-js',treinando);





