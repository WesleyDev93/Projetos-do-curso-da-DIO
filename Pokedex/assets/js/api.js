

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
 




pokeAPI.getPokemons ().then ((pokemon) => {
    
    for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i]
    pokemonOL.innerHTML += convertePokemonLI(pokemon) // traz a lista para LI 
   
}})
   
     

    