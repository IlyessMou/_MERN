const Author = require('../models/model.author') ;

module.exports.addNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyAddedAuthor => {
            res.json({ author: newlyAddedAuthor })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findALLAuthors = (req, res) => {
    Author.find() 
        .then((AllAuthors) => {
            console.log(">>> these are ALL My favorite Authors ", AllAuthors)
            res.json(AllAuthors)
        })
        .catch(err => {
            console.log("failed")
            res.status(400).json(err)
        })
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json(oneSingleAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ author: updatedAuthor })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
            console.log("👌👌👌Deleted succesfully 👌👌👌 ")
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}