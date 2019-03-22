const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        axios
            .get("http://localhost:3001/api/content")
            .then(results => {
                console.log(results)
                results.data.filter(
                    result =>
                        result.thumbnails[2].url &&
                        result.metadata.headline &&
                        result.metadata.description &&
                        result.authors
                )
            }).then(apiIGN =>
                db.ignContent.find().then(dbignContent =>
                        apiIGN.filter(apiIGN =>
                            dbignContent.every(dbIGN => dbIGN.contentId.toString() !==apiIGN.id)
                        )
                    )
                ).then(content => res.json(content))
                .catch(err => res.status(422).json(err));
    }
};