module.exports = [
  {
    method: 'GET',
    path: '/sign_in',
    handler: (request, h) => {
        return h.view('users/sign_in');
    }
  },
  {
    method: 'POST',
    path: '/sign_out',
    handler: (request, h) => {
        return h.view('articles/home');
    }
  },
  {
    method: 'GET',
    path: '/sign_up',
    handler: (request, h) => {
        return h.view('users/sign_up');
    }
  }
];
