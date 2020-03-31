//Peticiones con XML Http:Request
let XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest()
    //Hacer un llamado a la URL
    //          Método, URL, Async
    xhttp.open('GET', url_api, true)
    //Escuchamos los cambios de la conexión
    xhttp.onreadystatechange = function (event){ //Hay 5 estados(del 0 al 4)
        if(xhttp.readyState === 4){ // 4 quiere decir completada
            if(xhttp.status === 200){ // Validamos que haya sido Exitosa
                //En los callbacks, se pasa 1ero el error y 2do la respuesta
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send() //Enviamos la solicitud
}

fetchData(API, function (error1, data1) {
    if(error1) return console.error(error1)
    console.log(data1.results[0].id)
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2)
        console.log(data2.origin.url)
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3) 
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
