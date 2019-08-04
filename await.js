process.stdout.write('Ingrese nombre del país: ');
process.stdin.on('data', (data) => {
    let mexico = data.toString();
    getCountry(mexico);
});

let fetch = require('node-fetch');
getCountry = (countryName) => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log("Error ", error))
};