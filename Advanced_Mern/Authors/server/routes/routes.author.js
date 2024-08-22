const AuthorController = require('../controllers/controller.author');


module.exports = (app) => {
    app.get("/authors", AuthorController.findALLAuthors);
    app.post('/authors/new', AuthorController.addNewAuthor);
    app.get('/authors/:id', AuthorController.findOneSingleAuthor);
    app.put('/authors/:id/edit', AuthorController.updateExistingAuthor);
    app.delete('/authors/:id', AuthorController.deleteAnExistingAuthor);
}
