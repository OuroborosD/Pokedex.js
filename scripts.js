
async function pokemonApi(id){// await funciona para a
    const url =  `https://pokeapi.co/api/v2/pokemon/${id}`
    try{
        const resposta = await fetch(url)
        const data = await resposta.json()
        let img = data.sprites.front_default
        let id = data.id
        let nome = data.name
        let tipo = data.types[0].type.name
        let card = [img,id,nome,tipo]
        return card
    
    }catch(e){
        console.log(e)
    }}

function cor_card(tipo){
   //objeto literal,  para trocar a cor, sme precisar o if, só colocado o nome
   let cores_card = {
    "grass":  "#00FF7F",
    "fire"  : "#FF6347",
    "ground": "#FFDEAD",
    "water":"rgb(224,255,255, 0.4)",
    "electric":"rgb(255,255,0,0.4)",
    "rock": "rgb(188,143,143,0.4)",
    "dragon":"rgb(216,191,216,0.4)"}
    let cor = ''
    if(cores_card[tipo] === undefined){// jeito mais robusto de checar undefined
        cor = 'rgb(220,220,220, 0.6)'
    }else{
        cor = cores_card[tipo]
         }
    return cor
}

function construir_card(data,cor){
    let card = document.getElementsByClassName('pokedex')[0]
    card.innerHTML += `  <div class="card">
                            <img src="${data[0]}" alt="pokemon">
                           <p> <span>${data[1]}</span></p>
                            <p>${data[3]}</p>
                            <p>${data[2]}</p>
                        </div>`
    card.style.background

}


async function  pk(){
    for(let i = 1; i <= 151; i++){
        let data = await pokemonApi(i)
        console.log(data)
        let cor =  cor_card(data[3])
        //console.log(cor)  
        construir_card(data,cor)  
    }
   
}




