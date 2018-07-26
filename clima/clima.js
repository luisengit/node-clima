const axios = require('axios');

const getclima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d8ae738612ae0def8a6fb6c3744b17ef`);


    return resp.data.main.temp;
}

module.exports = {
    getclima
}