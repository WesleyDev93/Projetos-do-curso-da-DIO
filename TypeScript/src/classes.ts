// Interfaces  (type x interface )
//TYPE
type robo = {

    id: number | string;
    name: string;

}

// Interface nao recebe pelo =  // readonly = deixar em modo leitura , sem modificar os dados 

interface robo2  {

 readonly  id: number;
    name: string;
    sayHello (): string; // espefica a função 
}

const bot: robo = {

    id:1,
    name: "bot",
}


const bot2: robo2 = {

    id:1,
    name: "bot",

    // traz a função para dentro  da variable
    sayHello (){    
        return "Hello"
    }
   
}



// Quando for variaves para tipagem , usar o type 
// Quando for com class (um molde) usar a interface

class belo implements robo2 {
// traz os dados de robo2      
    id: number;
    name: string;

    // Metodo construtor 
    constructor (id: number, name: string) {
     
        this.id = id;
        this.name = name;

    }
     // traz a função para dentro  do construtor
    sayHello(): string {
        return "Hello"
    }
}

// construção da pessoa baseada na tipagem de robo2


// construindo pela tipagem atribuindo os dados
const p  = new belo (5, "Wesley"); 





// Classes   (forma)

class personagem {

    
    name:string;
    // para adicionar um atributo opcional  ?
    // name?: string;  Assim não precisamos pasar o nome se não quisermos.
    forca: number;
    poder: number;

    constructor (name: string, forca: number,poder: number,) {
           
        this.name = name;
        this.forca = forca;
        this.poder = poder;

    }

    ataque (): void {

        console.log (`Ataque tem  ${this.forca} pontos`)
    }
}



// criar o elemento com os parametros 


const p1 = new personagem ("Capitão America", 1250, 350)
p1.ataque ()


// Data Modifiers  (modificadores de acesso) -- Public -- Private -- Protected --


    // ao Adicionar o private , o item so pode ser acessado atraves da classe pelo construtor
    //não havera a opção caso usarmos o p2.name pois o atributo name esta privado.
    // o metodo public já e default do sistema , pode ser declarado mas pode padrão ele é public.
    // ao Adicionar o private , o item so pode ser acessado atraves da classes e subclasses
    // Os modificadores podem ser usados em metodos tambem


    // Sub Classes , conceito de herança , ganhar atributos de outra classe por herança
    // A classe que é pai sempre sera a superClass
    // A classe filha ou subClasse será nosso mago

    class mago extends personagem {

        // adicionar novos atributos desta subClass

        magicPontos: number;

        constructor (name: string, forca:number, poder: number, magicPontos: number) {
              
            

        // usamos o super para invocar o construtor da classe pai -- atenção aos parametros
            super (name, forca, poder); 
            this.magicPontos = magicPontos; // Declarando com o this 
        }
    }
// construimos o personagem mago , com todos os atributos anteriores e mais novo que é o magicPontos
    const p3 = new mago ("mago negro", 1500,450,800)



