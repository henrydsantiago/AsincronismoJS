const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async(url_api) =>{
    try {
        const data = await fetchData(url_api)
        const personaje = await fetchData(`${url_api}${data.results[0].id}`)
        const origen = await fetchData(personaje.origin.url)
        console.log(data.info.count)
        console.log(personaje.name)
        console.log(origen.dimension)
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)