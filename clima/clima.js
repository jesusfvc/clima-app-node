const axios = require('axios');

const getClima = async (lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b58a3fbc844b9b39bfb0ed47eb3a0426&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}