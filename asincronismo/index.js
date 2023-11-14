const parrafo = document.getElementById("parrafo");
const loadP = document.getElementById("loadP");
const loader = document.getElementById("lds-roller");
const APIKEY = "b3009f7769e2b8540baac6a92ad07ad8"

/*setTimeout(() => {
    loadP.classList.add("show");
    loader.[0].style.display = "none";

}, 3000)*/

const openWheather = async (city) => {
    const getDataFromAPIWeater = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWeater.json()
    return responseData


}
openWheather(`London`)

    .then((respuestaDelClima) => {
        console.log(respuestaDelClima)
    })
    .catch((error) => console.log(error))