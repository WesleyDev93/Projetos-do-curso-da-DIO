

const pokeAPI =  {}

pokeAPI.getPokemons = ( offset = 0, limit = 10 ) =>  {

    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


    
    fetch (url) // gera um processamento no servidor e uma resposta em promessa

    .then ( (response) => { return response.json ()})   // convertendo em Json  => arrow function

    .then ( (jsonBody) => jsonBody.results)  // Body convertido 
      
    .catch ( (erro) => {  console.log("Concluida") })  // tratamento de erros 

    .finally ( () => {  console.log ("O serviço foi concluido")})  // mensagem final independente de erros
}