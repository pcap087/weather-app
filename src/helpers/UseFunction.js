import React from 'react'

export const UseFunction = (clima) => {

    const padTo2Digits = (num) => {
        return String(num).padStart(2, '0');
    }
    
    const dt = clima.dt;
    const timeZone = clima.timezone;
    
    // ----- date and time ----- 
    const date  = new Date(dt * 1000);
    const toUtc = date.getTime() + date.getTimezoneOffset() * 60000;
    const selectedDate = new Date(toUtc + 1000 * timeZone);

    const lastTimeUpdate = padTo2Digits(selectedDate.getHours()) + ":" + padTo2Digits(selectedDate.getMinutes());
    const dtSunrise  = new Date(clima.sys.sunrise * 1000);
    const dteSunset  = new Date(clima.sys.sunset * 1000);

    const toUtcSunrise = dtSunrise.getTime() + dtSunrise.getTimezoneOffset() * 60000;
    const toUtcSunset = dteSunset.getTime() + dteSunset.getTimezoneOffset() * 60000;

    const sunrise = new Date(toUtcSunrise + 1000 * timeZone);
    const sunset =  new Date(toUtcSunset + 1000 * timeZone);

    const hoursSunrise = padTo2Digits(sunrise.getHours()) + ":" + padTo2Digits(sunrise.getMinutes());
    const hoursSunset  = padTo2Digits(sunset.getHours()) + ":" + padTo2Digits(sunset.getMinutes());

    const weekday = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
    const day = selectedDate.getDate();
    const month = selectedDate.toLocaleDateString("en-EN", {month:'long'})
    const year = selectedDate.getFullYear();
    // ----- end date and time ------

    // ----- img weather ----- 
    const weather = clima.weather[0].main;
    const img = {
        'Clear': "images/clear.png",
        'Clouds': "images/clouds.png",
        'Smoke': "images/clouds.png",
        'Drizzle': "images/drizzle.png",
        'Humidity': "images/humidity.png",
        'Mist': "images/mist.png",
        'Rain': "images/rain.png",
        'Search': "images/search.png",
        'Snow': "images/snow.png",
        'Wind': "images/wind.png",
        'Thunderstorm': "images/storm.png"
    }
    const resultImg = img[weather];
    // ------ end img weather ------ 

    //"src/images/wind.png",

    return { weekday, day, month, year, lastTimeUpdate, hoursSunrise, hoursSunset, resultImg }

    
}




