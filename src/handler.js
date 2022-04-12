const { nanoid } = require('nanoid');
const books = require('./books');

// untuk menyimpan buku
function simpanBukuHandler(request, h) {
    const requestBuku = request.payload;
    if (!requestBuku.name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }
    if (requestBuku.readPage > requestBuku.pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);

        return response;
    }

    const bookId = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        id: bookId,
        name: requestBuku.name,
        year: requestBuku.year,
        author: requestBuku.author,
        summary: requestBuku.summary,
        publisher: requestBuku.publisher,
        pageCount: requestBuku.pageCount,
        readPage: requestBuku.readPage,
        reading: requestBuku.reading,
        finished: requestBuku.pageCount === requestBuku.readPage,
        insertedAt,
        updatedAt,
    };
    books.push(newBook);

    const isSuccess = books.some((book) => book.id === bookId).length > 0;
    if (!isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId,
            },
        });
        response.code(201);

        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
}

module.exports = {
    simpanBukuHandler,
};
