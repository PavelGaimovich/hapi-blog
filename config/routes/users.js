module.exports = [
  {
    method: 'GET',
    path: '/sign_in',
    handler: (request, h) => {
        return h.view('sign_in');
    }
  },
  {
    method: 'POST',
    path: '/sign_out',
    handler: (request, h) => {
        return h.view('home');
    }
  },
  {
    method: 'GET',
    path: '/sign_up',
    handler: (request, h) => {
        return h.view('sign_up');
    }
  }
];
