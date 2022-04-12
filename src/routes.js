const {
    simpanBukuHandler,
    tampilSemuaBukuHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: simpanBukuHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: tampilSemuaBukuHandler,
    },
];

module.exports = routes;
