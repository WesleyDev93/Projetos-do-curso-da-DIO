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





// Classes 



