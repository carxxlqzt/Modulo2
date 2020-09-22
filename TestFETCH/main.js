//fetch que en inglés significa buscar y traer
// trabaja con AJAX es una tecnología que permite la comunicación entre un servidor y un cliente.
// Asynchronous JavaScript and XML
//La asicronía significa que AJAX trabaja paralelamente al javascript
//API Application Program Interphase



//parte 1: petición al servidor
//parte 2: resolver la petición (resivirla y manejar la información)
//parte 3: resolver los errores




//códigos 2xx: de éxtito
//200 ok
//201 created

//códigos 3xx: de redirección

//códigos 4xx: de error del cliente
//400 bad request
//401 unauthorized
//403 forbidden
//404 not found
//418 im a teapod

//códigos 5xx: de error del servidor
//500 Internal Server Error

async function getData(){
    let api = "https://pokeapi.co/api/v2/generation/1"

    let init = {
        method: 'GET'
    }

    let pokemon
    let list = document.getElementById('pkm')

    await fetch(api,init)
    .then(function(response){
        if(response.ok){
            return response.json()
        }else{
            throw new Error(response.status)
        }
    })
    .then(function(data){
        pokemon = data.pokemon_species
    })
    .catch(function(error){
        alert(error)
    })

    pokemon.forEach(p => {
        let li = document.createElement('li')
        li.innerText = p.name
        list.appendChild(li)
    })
}

getData()



