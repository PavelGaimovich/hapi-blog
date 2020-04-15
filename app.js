'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(require('@hapi/vision'));

    server.views({
        engines: {
            pug: require('pug')
        },
        relativeTo: __dirname,
        path: 'templates'
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
