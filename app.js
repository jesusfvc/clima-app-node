
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        deman: true
    }
}).argv; //53 seccion 6






const getInfo = async (direccion) => {
    try {

        const coords = await lugar.getLugarLatLng(argv.direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pude determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)