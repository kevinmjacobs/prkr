const SignupModel = require('./model.js');

module.exports = {
  post: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    SignupModel.post(email, password, (err, data) => {
      if (err) {
        console.log(err.stack);
        res.send('User not created').status(400);
      } else {
        res.send(data).status(201);
      }
    })
  }
}