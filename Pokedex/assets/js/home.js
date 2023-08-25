

const pokeAPI =  {}



function convertPokeapiDetailPokemon (pokeDetail) {
    
    const pokemon = new Pokemon()
    pokemon.numero = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map ((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type



    pokemon.foto = pokeDetail.sprites.other.dream_world.front_default
    

    return pokemon

}

pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch (pokemon.url)
    .then((response) => response.json())
    .then (convertPokeapiDetailPokemon)
}




pokeAPI.getPokemons = ( offset = 0, limit = 3 ) =>  {

    
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