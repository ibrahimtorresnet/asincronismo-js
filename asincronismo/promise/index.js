console.log("hola mi nombre")
setTimeout(() => {
    console.log("hola mundo con asincronia")
}, 5000)
console.log("como estan")

//promise
let dollar = 1
setTimeout(() => {


    const newPromise = new Promise((resolve, reject) => {

        if (dollar > 0) {
            resolve("gracias por los dolares")
        }
        else { reject("no tengo dinero") }
    })
    newPromise
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch(err => console.log(err))

}, 3000)


let galleta = "canela"
setTimeout(() => {
    const galletas = new Promise((resolve, reject) => {
        if (galleta === "canela") {
            resolve("buen gusto")
        }
        else { reject("no hay canelas") }
    })
    galletas.then((RespuestaDeGalleta) => {
        console.log(RespuestaDeGalleta)
    })

        .catch(error => console.log(error))

}, 4000)

