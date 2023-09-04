// tipos primitivos : boolean, number, string

let  ligado : boolean = false; // ou true
let nome : string = "Wesley";
let idade : number = 30;
let altura : number = 1.80;


// Null
//undefined

let nulo : null = null;
let indefinido : undefined = undefined;


// tipos abrangentes
//any
//void

let retorno :void 
let retornoView : any // aceita qualquer coisa , vazio , objeto , numero , boolean , string.




//Objetos sem previsibilidade

let produto : object = {

   name:"wesley",
   cidade: "sp",
   idade: "30",
};

// dar forma , estrutura aos objetos
type Produtoloja = {
   nome: string;
   preco:number;
   unidades: number;
}

let NProduto : Produtoloja = {

   nome: "tenis",
   preco: 10,
   unidades: 1,
}


// Arrays


let dados: string [] = ["dados", "nome", "idade", "altura"]
// ou pode ser declarado desta maneira
let dados2: Array<string> = ["dados", "nome", "idade", "altura"]



// Arrays e MultiTypes
// Array de dois tipos 
let infos : (string  | number)[] = ["wesley", "30", "10"]


//Tuplas  -- Lembrando que tuplas são imutaveis

let boleto : [string, number, number] = ["agua", 180.00, 347435];



//metodos de Arrays são os mesmos que no JS

//dados.map ();
// dados.pop ();
// dados.filter();
//dados.reduce ();



// datas

let aniversario : Date = new Date("2022-12-01 5:00:00");



// Funções , podem ser tipadas

function addNumber (x: number, y: number): Number {
    return x + y;
}

let soma: Number = addNumber (4,7)


function addHello (name: string): string {
    return  `Hello ${name}`;
}


// Funções de multi- tipo     | = ou 

function callToFone (phone: number | string): number | string {

    return phone;
    
}


// Funções Async  sempre tem uma Promise e ela deve ter sua tipagem explicita !


async function consultarDados (id: number): Promise <string> {
    return "Wesley"
}



