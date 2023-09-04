// Decorators  -- Decore uma função para injetar em outro lugar
//  ** Devemos habilitar o Decorators na ts config no experimentalDecorators **
//ex: toda vez que leite estiver a menos de 3,00 indiferente do local compre !
// gatilho e ação
// Decorators esta em fase de teste , portanto so rodará no Node dev


// criamos uma função para execusão
function exibirNome (target: any) {
    console.log (target)
}

// para chamar a função 
@exibirNome 
// uma  classe que receberá atributos
class funcionario {}

// assim vai se mostrar os nomes das classes , por que chamamos a função pelo Decorators acima dela 
@exibirNome
class quincas {}



// Class Decoration

// criamos a função da versão 

function apiVersion (version:string) {
    
    return (target:any) => {
        Object.assign (target.prototype, {__version:version});
     }
}

// chamamos a função da versão e criamos a classe 
@apiVersion ("1.0.0")




// criamos a função para decorator
function minLenght (lenght: number) {
    return (target:any, key: string) => {
        // console.log (target, key)  // target = alvo

        // vamos alterar os valores de get e set 
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {

            // vamos adicionar validação
            if (value.length < lenght)  {
                throw new Error (`Tamanho menor do que ${lenght}`);
            }else {
                _value = value
            }
             
            // Definindo as propriedades de get e set

            Object.defineProperty(target, key ,{
                get:getter,
                set:setter,
            }) 
        }
    }
}

// Atributte decorator
class Api {
  
    @minLenght (3)    // implementando função para letras , pelo decorator nao podem ser menor que 3 letras
    name: string;




    constructor (name: string) {

        this.name = name;
    }


}

// criamos os elementos a função da versão
const api = new Api ("produtos")

console.log (api)

