const LoginModel = require('./model.js');
const bcrypt = require('bcrypt');

module.exports = {
  get: (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    LoginModel.get(email, (err, data) => {
      console.log(data);
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        console.log(password, data.password);
        bcrypt.compare(password, data.password)
          .then(result => {
            if (result) {
              res.sendStatus(200);
            } else {
              res.sendStatus(204);
            }
          })
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          })
      }
    })
  }
}