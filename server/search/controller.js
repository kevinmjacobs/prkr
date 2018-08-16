const SearchModel = require('./model');

module.exports = {
  get: (req, res) => {
    SearchModel.get((err, data) => {
      (err) && console.log(err.stack);
      res.send(data).status(200);
    })
  }
}