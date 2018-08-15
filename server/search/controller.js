const SearchModel = require('./model');

module.exports = {
  get: (req, res) => {
    SearchModel.get((err, data) => {
      (err) && console.log(err.stack);
      console.log(data);
      res.send().status(200);
    })
  }
}