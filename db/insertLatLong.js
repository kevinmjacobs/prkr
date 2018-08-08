const { client } = require('./database');
const geocoder = require('geocoder');

client.connect();

client.query(`SELECT id, address, city, state, zip FROM valet;`, (err, data) => {
  (err) && console.log(err.stack);
  let valetData = data.rows;
  client.end();
  valetData.forEach((data, index) => {
    let address = `${data.address} ${data.city} ${data.state} ${data.zip}`;
    setTimeout(() => {
      // console.log();
      geocoder.geocode(address, (err, geoData) => {
        if (err) {
          console.log(`address ${address} not found`);
        } else {
          if (geoData.results.length === 0) {
            console.log(`NO RESULTS: ${address}`)
          } else {
            console.log(address, geoData.results[0].geometry.location);
          }
        }
      })
    }, index * 500)
  })
});