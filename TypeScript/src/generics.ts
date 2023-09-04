// Generics 


// vamos criar uma função para criar os Arrys e depois concatena-los


// esses metodos podem causar alguns problemas por ter sido expecificado por ANY 
// Então poderiamos passar numeros , string, boolean que ele colocaria no Array.


// para resolver o problema usamos ao inves de any a seguinte sintaxe <T>

// (Antigo com any)  function Arr (...itens: any[]): any[] {
  //  return new Array().concat (...itens);

//}

// ... significa que estamos espalhando os elementos no Array
function Arr <T>(...itens: T[]): T[] {
    return new Array().concat (...itens);

}


// Apos adicionar o T vamos colocar agora o tipo que o Array vai ser criado

// cria os Arrays com os numeros 
const numArray = Arr <number[]>([1,6], [15]);

// Cria outro array com string
const stgArray = Arr <string[]> (["Wesley", "Hello"], ["Magico"]);

