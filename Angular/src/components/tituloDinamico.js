



class tituloDinamico extends HTMLElement {

    constructor () {

        super()

    const shadow = this.attachShadow ({mode: "open"})


    // base do componente

    const componentRoot = document.createElement ('h1');
    //componentRoot.textContent = "Wesley";   // Ao chamar a tag o nome estara escrito nela como H1

    // Vai pegar o texto do atributo titulo que será escrita dentro da Tag no HTML
    //<titulo-dinamico titulo = "Noticias do mundo"></titulo-dinamico>
    // pode ser usada varias vezes , e alterando o texto conforme o parametro dentro da TAG ""
    componentRoot.textContent = this.getAttribute ("titulo");  


    // Estilizar o componente, os estilos são aplicados apenas dentro desta classe , não alterando os demais
    // estilos são unicos
     const style = document.createElement ('style');
     style.textContent = `
           
          h1 {
            color: red;
          }
     `


     
    // enviar para a shadow 

      shadow.appendChild (componentRoot);
      shadow.appendChild (style);
      


    
    }
}


customElements.define ('titulo-dinamico', tituloDinamico) // sempre colocar hifen no nome para diferenciação de tags normais ou classes