const API_KEY = "780393b90fbf014387b0459d341e69c7";
function onGeoOk(position){
    const lat = position.coords.latitude;//위도
    const lon = position.coords.longitude;//경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    console.log("Can't find you. No weather for you.")
}

//이걸 부르면 브라우저에서 위치좌표를 줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);