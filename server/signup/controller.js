const SignupModel = require('./model.js');
const bcrypt = require('bcrypt');

module.exports = {
  post: (req, res) => {
    const email = req.body.email;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log(err.stack)
        res.send('Error hashing password').status(400);
      } else {
        SignupModel.post(email, hash, (err, data) => {
          if (err) {
            console.log(err.stack);
            res.send('User not created').status(400);
          } else {
            res.send(data).status(201);
          }
        });
      }
    });
  }
}