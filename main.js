feather.replace()

// Make a request for a user with a given ID
function getWeather(parameter) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${parameter}&units=metric&appid=a3acaca3639f1ab3f7f8102f43463897`)
};

function doc(id, parameter) {
    document.getElementById(id).innerHTML = parameter
};

function img(parameter) {
    document.getElementById("icon").setAttribute("src", parameter)
};

async function data(parameter) {
    await getWeather(parameter).then(function(results) {
        doc("city-name", results.data.name);
        doc("city-temp", results.data.main.temp + "ºC");
        doc("weather-main", results.data.weather[0].main);
        doc("temp-min", "Temperatura mínima de " + results.data.main.temp_min + "ºC");
        doc("temp-max", "Temperatura máxima de " + results.data.main.temp_max + "ºC");
        doc("wind-speed", "Velocidade do vento de " + results.data.wind.speed + "m/s");
        doc("humidity", "Humidade: " + results.data.main.humidity + "%");
        doc("long", "Longitude: " + results.data.coord.lon + "'");
        doc("lat", "Latitude: " + results.data.coord.lat + "'");
        switch (results.data.weather[0].main) {
            case "Clouds":
                img("./assets/cloud.svg")
                break;
            case "Rain":
                img("./assets/cloud-rain.svg")
                break;
            case "Extreme":
                img("./assets/cloud-lightning.svg")
                break;
            case "Snow":
                img("./assets/cloud-snow.svg")
                break;
            default:
                img("./assets/cloud.svg")
                break;
        }
    })
}
document.getElementById("search-bt").addEventListener("click", () => {
    data(document.getElementById("search-camp").value)
})