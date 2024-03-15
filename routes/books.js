const express = require('express')

const bookRouter = express.Router()

const books = [
    {
        title: 'The Trials of Brother Jero',
        id: 1,
        year: 1963,
        author: 'Wole Soyinka',
    },
    {
        title: 'Things Fall Apart',
        id: 2,
        year: 1958,
        author: 'Chinua Achebe'
    },
    {
        title: 'Last Days at Forcados High School',
        id: 3,
        year: 2013,
        author: 'A.H Mohammed'
    },
    {
        title: 'Sugar Girl',
        id: 4,
        year: '1964',
        author: 'Kola Onadipe'
    },
    {
        title: 'Without a Silver Spoon',
        id: 5,
        year: '1981',
        author: 'Eddie Iroh',
    },
    {
        title: 'The Incorruptible Judge',
        id: 6,
        year: '1962',
        author: 'D. Olu Olagoke',
    }
]
bookRouter.get('/', (req, res) => {
    res.json(books)
})

bookRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(book => book.id == id)

    if (!book) {
        res.status(404).end("Book not found")
        return
    }

    res.json(book)
})

bookRouter.post('/', (req, res) => {
    const book = req.body
    books.push(book)
    res.json(book)
})

bookRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const book = req.body
    const index = books.findIndex(book => book.id == id)

    if (index == -1) {
        res.status(404).end("Book not found")
        return
    }

    books[index] = book
    res.json(book)
})

bookRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = books.findIndex(book => book.id == id)
    if (index == -1) {
        res.status(404).end("Book not found")
        return
    }

    books.splice(index, 1)
    res.json(books)
})


module.exports = bookRouter


