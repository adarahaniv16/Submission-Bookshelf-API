const {
    simpanBukuHandler,
    tampilSemuaBukuHandler,
    detailBukuHandler,
    editBukuHandler,
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
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBukuHandler,
    },
];

module.exports = routes;
