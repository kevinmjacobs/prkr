const SearchModel = require('./model');
const haversine = require('../../helpers/haversine');

module.exports = {
  get: (req, res) => {
    SearchModel.get(req.query.lat, req.query.lng, (err, data) => {
      (err) && console.log(err.stack);
      const results = [];
      data.forEach((result) => {
        results.push([result.id, result.name, `${result.address}, ${result.city}, ${result.state} ${result.zip}`, haversine(req.query.lat, req.query.lng, result.lat, result.long)])
      });
      results.sort((a, b) => a[3] - b[3]);
      res.send(results).status(200);
    })
  }
}