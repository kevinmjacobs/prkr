const SignupModel = require('./model.js');
const bcrypt = require('bcrypt');

module.exports = {
  post: (req, res) => {
    const email = req.body.email;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log(err.stack)
        res.sendStatus(400)
      } else {
        SignupModel.post(email, hash, (err, data) => {
          if (err) {
            console.log(err.stack);
            res.sendStatus(400);
          } else {
              if (data === 1) {
                res.sendStatus(201);
              } else {
                res.sendStatus(204);
              }
          }
        });
      }
    });
  }
}