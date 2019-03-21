const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        axios
            .get("https://ign-apis.herokuapp.com/content?startIndex=30&count=5")
            .then(json => {
                console.log("hello this works?")
                console.log(json)
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