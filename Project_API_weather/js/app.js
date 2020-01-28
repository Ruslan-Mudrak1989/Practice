
// WEATHER FOR 2 DAYS


const search = document.querySelector('.button-round');
const city = document.querySelector('#form-city');
const validation = document.querySelector('.validation-error');
const listWeather = document.querySelectorAll('.features li');
const listWeather1 = document.querySelectorAll('.features-1 li');
const choiceCity = document.getElementById('choice-city');

console.log(cities);

let cityName = '';

search.onclick = function () {
    for (let i = 0; i < cities.length; i++) {
        if (city.value.trim() === cities[i].name && choiceCity.value === 'disable' || city.value === '' && choiceCity.value === cities[i].name) {
            cityName = cities[i].daily;
            fetch(cityName)
                .then(function (resp) {
                    return resp.json()
                })
                .then(forecast);

            function forecast(data) {
                console.log(data);
                let focusStyle = 'input:focus {border-color:#4caf50}';
                city.style.cssText = focusStyle;
                validation.textContent = '';
                document.querySelector('.city-name').textContent = `${data.city.name},${data.city.country}`;


                const description = document.querySelectorAll('.disclaimer');
                const degree = document.querySelectorAll('.price');


                for (let k = 0; k < data.list.length; k++) {
                    degree[k].innerHTML = `${Math.round((data.list[k].main.temp) - 273)}&deg`;
                    description[k].textContent = data.list[k].weather[0].description;
                    if (k === 0) {
                        for (let i = 0; i < listWeather.length; i++) {
                            if (i === 0) {
                                listWeather[i].innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.list[k].weather[0].icon}@2x.png">`;
                            } else if (i === 1) {
                                listWeather[i].textContent = `Humidity: ${data.list[k].main.humidity}%`;
                            } else if (i === 2) {
                                listWeather[i].textContent = `Wind Speed: ${data.list[k].wind.speed}m/s`;
                            }
                        }
                    }else if(k === 1){
                        for (let i = 0; i < listWeather1.length; i++) {
                            if (i === 0) {
                                listWeather1[i].innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.list[k].weather[0].icon}@2x.png">`;
                            } else if (i === 1) {
                                listWeather1[i].textContent = `Humidity: ${data.list[k].main.humidity}%`;
                            } else if (i === 2) {
                                listWeather1[i].textContent = `Wind Speed: ${data.list[k].wind.speed}m/s`;
                            }
                        }
                    }
                }

                city.value = '';
                choiceCity.value = 'disable';

            }
        } else {
            city.style.borderColor = '#f44336';
            validation.textContent = 'Please enter a valid value.';
            validation.style.color = '#f44336';
        }
    }
};




