const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encodedurl = encodeURI(dir);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedurl}`,
        headers: { 'X-RapidAPI-Key': '400831872bmsh515dc6161e8cc4ep1ce56bjsn3514558f029c' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}