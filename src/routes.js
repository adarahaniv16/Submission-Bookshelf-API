const {
    simpanBukuHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: simpanBukuHandler,
    },
];

module.exports = routes;
