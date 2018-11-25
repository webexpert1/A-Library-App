var express = require('express');
const bookRouter = express.Router();

function router(nav) {
    var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolavich',
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
        },
        {
            title: 'The Time Machine',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The Dark World',
            genre: 'Fantasy',
            author: 'Lev Nikolavich',
            read: false
        },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Keneth Grahme',
            read: false
        },
        {
            title: 'Lige On The Missip',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        },
        {
            title: 'Childhood',
            genre: 'Biography',
            author: 'Lev Nikolavich',
            read: false
        }
    ];

    bookRouter.route('/')
        .get((req, res) => {
            res.render('bookListView',
                {
                    nav,
                    title: 'Library',
                    books
                }
            );
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            res.render('bookView',
                {
                    nav,
                    title: 'Library',
                    book: books[id]
                }
            );
        });

    return bookRouter;
}

module.exports = router;