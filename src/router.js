const express = require('express')

const libraryController = require('./controllers/libraryController')

const routes = express.Router()

routes.get('/livros', libraryController.list)
routes.get('/livros/:id', libraryController.show)
routes.post('/livros', libraryController.create)
routes.put('/livros/:id', libraryController.update)
routes.delete('/livros/:id', libraryController.delete)

module.exports = routes