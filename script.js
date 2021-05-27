const input = document.querySelector(".input-fields input"),
btn = document.querySelector(".input-fields button"),
cityName = document.querySelector("#name"),
temp = document.querySelector("#temp"),
desc = document.querySelector("#desc"),
wind = document.querySelector("#wind");

btn.onclick = () => {
    const city = input.value;
    
    const API_KEY = "3d8fcfb5b8561690a8ad5272d7faec63";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d8fcfb5b8561690a8ad5272d7faec63`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        cityName.innerHTML = data.name;
        var kelvin = data.main.temp;
        var celsius = kelvin - 273.15;
        temp.innerHTML = `${celsius.toFixed(2)} C`;
        desc.innerHTML = data.weather[0].description;
        wind.innerHTML = `Wind : ${data.wind.speed}`;
    })
    .catch((err) => {
        cityName.innerHTML = "City Not Found";
    });
}
