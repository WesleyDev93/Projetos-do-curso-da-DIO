

const pokeAPI =  {}



function convertPokeaiDetailPokemon (pokemonDetail) {
    const pokemon = new pokemon()
    pokemon.numero = pokemonDetail.order
    pokemon.name = pokemonDetail.name
    const types = pokemonDetail.types.map ((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type



    pokemon.foto = pokemonDetail.sprites.other.dream_world
    

    return pokemon 

}

pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch (pokemon.url)
    .then((response) => response.json())
    .then (convertPokeaiDetailPokemon)
}




pokeAPI.getPokemons = ( offset = 0, limit = 10 ) =>  {

    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


    
    return fetch (url) // gera um processamento no servidor e uma resposta em promessa

    .then ( (response) =>  response.json ())   // convertendo em Json  => arrow function

    .then ( (jsonBody) => jsonBody.results)  // Body convertido 

    .then ((pokemons)  => pokemons.map (pokeAPI.getPokemonDetail))
                             

    .then ((detailRequests) => Promise.all(detailRequests))

    .then ((pokemonDetails) => pokemonDetails)
      
    
}





// Prestar atenção na escrita correta das palavras reservadas.

//.catch ( (erro) => {  console.log("Concluida") })  // tratamento de erros 

    //.finally ( () => {  console.log ("O serviço foi concluido")})  // mensagem final independente  de erros