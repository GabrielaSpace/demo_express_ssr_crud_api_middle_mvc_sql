const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', authorsApiController.createAuthor);
authorsApiRouter.delete('/', authorsApiController.deleteAuthor);
authorsApiRouter.put('/:email', authorsApiController.updateAuthor);

module.exports = authorsApiRouter;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */