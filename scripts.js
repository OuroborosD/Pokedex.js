
async function pokemonApi(){// await funciona para a
    const url =  `https://pokeapi.co/api/v2/pokemon/1`
    try{
        console.log(1)
        const resposta = await fetch(url)
        console.log(2)
        const data = await resposta.json()
        console.log(data)
    }catch(e){
        console.log(e)
    }
}


