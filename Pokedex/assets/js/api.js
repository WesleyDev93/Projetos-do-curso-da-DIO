

const offset = 0
const limit = 10
 const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertePokemonLI(pokemon) { // cria template da LI 
     return `<li class="item1">
                
     <span class="numero">#001</span>
     <span class="nome">${pokemon.name}</span>
     
     
     <div class="detalhes">
         <ol class="tipos">

             <li class="tipo">Tipo 01</li>
             <li class="tipo">Tipo 02</li>
         </ol>

         <img class="imagem" src="./assets/img/teste.png" alt="${pokemon.name}">
     </div>
     
 </li>`

}


 const pokemonOL = document.getElementById ('pokemonList') // pega pelo ID a ol pai
 




pokeAPI.getPokemons ().then ((pokemonList) => {

    const listaItem = []

    pokemon.map ()     //função transforma uma forma em outra forma 

    for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i]
    listaItem.push (convertePokemonLI(pokemon)) // Converte diretamente a lista , carregando ela de uma vez.
   
    console.log (listaItem)

}
//pokemonOL.innerHTML += convertePokemonLI(pokemon) // traz a lista para LI -- retirado para nao recarregar toda vez
})
     

    