const User = require('../models/user');
const Bcrypt = require('bcrypt');

module.exports = {
  postSignIn: async (request, h) => {
    const { username, password } = request.payload;
    const account = User.find(
        (user) => user.username === username
    );

    if (!account || !(await Bcrypt.compare(password, account.password))) {

        return h.view('/login');
    }

    request.cookieAuth.set({ id: account.id });

    return h.redirect('/');
  },
  postSignUp: async (request, h) => {
    var viewName = "users/sign_in";
    var feedback = "Now you can sign in";

    const params = request.payload;

    await User.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: Bcrypt.hashSync(params.password, 5)
    }).catch(function(validationError) {
      feedback = [];

      console.log(validationError);

      validationError.errors.forEach(error => {
        feedback.push(error.message);
      });

      viewName = "users/sign_up";
    });

    return h.view(viewName, {feedback});
  },
   options: {
       auth: {
           mode: 'try'
       }
   }
};
