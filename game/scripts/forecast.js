(function(){
    const DAYWEATHER = [
        { 
            day: "Sunday",
            temperature: "+27°C",
            windspeed: "4 m/s",
            imgFile: "Cloudy_Sunny"
        },
        { 
            day: "Monday",
            temperature: "+20°C",
            windspeed: "7 m/s",
            imgFile: "Windy"
        },
        { 
            day: "Tuesday",
            temperature: "+17°C",
            windspeed: "4 m/s",
            imgFile: "Sunny"
        },
        { 
            day: "Wednesday",
            temperature: "+19°C",
            windspeed: "3 m/s",
            imgFile: "Raining"
        },    { 
            day: "Thursday",
            temperature: "+12°C",
            windspeed: "5 m/s",
            imgFile: "Foggy"
        },  
        { 
            day: "Friday",
            temperature: "+15°C",
            windspeed: "10 m/s",
            imgFile: "Raining_Sun"
        },
        { 
            day: "Saturday",
            temperature: "+27°C",
            windspeed: "4 m/s",
            imgFile: "Sunny"
        }
    ];
    const currentUserDayNum = document.querySelector(".weather__day");
    const errorMessage = document.querySelector(".weather__error-message");
    const forecast = document.querySelector(".forecast");
    const weatherImg = document.querySelector(".forecast__img");
    const day = document.querySelector(".forecast__day");
    const temperature = document.querySelector(".forecast__temp");
    const wind = document.querySelector(".forecast__wind");
    console.log(currentUserDayNum.value);

    

    const forecastBlock = () =>{
        if(currentUserDayNum.value){
            errorMessage.style.display = "none";
            forecast.style.display = "flex";
            weatherImg.src = `images/weather-icons/${DAYWEATHER[currentUserDayNum.value].imgFile}.png`;
            day.textContent = DAYWEATHER[currentUserDayNum.value].day;
            temperature.textContent = DAYWEATHER[currentUserDayNum.value].temperature;
            wind.textContent = `Windspeed:${DAYWEATHER[currentUserDayNum.value].windspeed}`;
            console.log(DAYWEATHER[currentUserDayNum.value].day);
        }
        else{
            forecast.style.display = "none";
            errorMessage.style.display = "inline";
        }
    }

    currentUserDayNum.onchange = forecastBlock;



}());