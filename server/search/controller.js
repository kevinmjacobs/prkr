const SearchModel = require('./model');

module.exports = {
  get: (req, res) => {
    SearchModel.get(req.query.lat, req.query.lng, (err, data) => {
      (err) && console.log(err.stack);
      res.send(data).status(200);
    })
  }
}