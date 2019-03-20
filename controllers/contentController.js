const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.ignContent.find(req.query)
            .then(dbignContent => res.json(dbignContent))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.ignContent.findById(req.params.id)
            .then(dbignContent => res.json(dbignContent))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.ignContent.create(req.body)
            .then(dbignContent => res.json(dbignContent))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.ignContent.findByIdAndUpdate({ id: req.params.id }, req.body)
            .then(dbignContent => res.json(dbignContent))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.ignContent.findById(req.params.id)
            .then(dbignContent => dbignContent.remove())
            .then(dbignContent => res.json(dbignContent))
            .catch(err => res.status(422).json(err));
    }
};