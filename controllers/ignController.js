const axios = require("axios");
const db =require("../models");

module.exports = {
    findall: function(req, res) {
        const { query: params } = req;
        axios
            .get("https://ign-apis.herokuapp.com/content?", { params })
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