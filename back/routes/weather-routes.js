const axios=require('axios');
const express=require('express');
const router= express.Router();

router.post("/", (req, res) => {
    const city = req.body.city;
    console.log('here into weather', city);
    const apiKey = "2bc8b1b60c55ad3f43499eb799d3f39e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +apiKey ;
    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response.data);
            const weather = response.data.main;
            
            console.log('Here weather main', weather);
            const result = {
                tempmin:weather.temp_min,
                tempmax:weather.temp_max,
                windspeed:response.data.wind.speed,
                icon :response.data.weather[0].icon
            }
            res.status(200).json({
               
                message:`le météo de city ${req.body.city}`,
                weather: result
            })
        });
});

module.exports=router;