const {
    simpanBukuHandler,
    tampilSemuaBukuHandler,
    detailBukuHandler,
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
    {
        method: 'GET',
        path: '/books/{id}',
        handler: detailBukuHandler,
    },
];

module.exports = routes;
