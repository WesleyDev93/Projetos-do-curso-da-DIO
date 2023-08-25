
//function convertePokemonTypesOL(pokemonTypes) {
 //   return pokemonTypes.map ((typeSlot) => `<li class="tipo">${}</li>`)
//}  não sera usado pois criamos uma Class , com os dados de acordo com nosso projeto


const pokemonOL = document.getElementById ('pokemonList') // pega pelo ID a ol pai
const botao = document.getElementById ('carregarMais')// pega pelo ID o botao
const limit = 5
let offset = 0






function convertePokemonLI(pokemon) { // cria template da LI 
     return `<li class="item1 ${pokemon.types}">
                
     <span class="numero">${pokemon.numero}</span>
     <span class="nome">${pokemon.name}</span>
     
     
     <div class="detalhes">
         <ol class="tipos">
              
            ${pokemon.types.map((type) => `<li class="tipo ${pokemon.types}" >${type}</li>`).join ('')}
         </ol>

         <img class="imagem" src="${pokemon.foto}" alt="${pokemon.name}">

         
     </div>
     `
// se atentar na busca das propriedades na API para ver o caminho.
}





// nova função de paginação 


function carregarPokemonItens(offset, limit) {
    pokeAPI.getPokemons (offset, limit).then ((pokemonList = []) => {

        const  novaHTML = pokemonList.map(convertePokemonLI).join ('')  //função transforma uma forma em outra forma 
        pokemonOL.innerHTML += novaHTML
       
            
   
   
   })
}



carregarPokemonItens (offset, limit)



botao.addEventListener ('click', () => {
    offset += limit
    carregarPokemonItens (offset, limit)
}
)







 // pokeAPI.getPokemons ().then ((pokemonList = []) => {

 //    const  novaHTML = pokemonList.map(convertePokemonLI).join ('')  //função transforma uma forma em outra forma 
 //    pokemonOL.innerHTML = novaHTML
//})
     

    