import axios from "axios";

export default {
    getContent: function() {
        return axios.get(""
        );
    },
    getSavedContent: function() {
        return axios.get("/api/ign")
    },
    deleteSavedContent: function(id) {
        return axios.delete("/api/ign/" + id)
    },
    saveContent: function(contentData) {
        return axios.post("/api/books", contentData);
    }
};