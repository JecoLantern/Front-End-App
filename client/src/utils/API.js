import axios from "axios";

export default {
    getContent: function() {
        return axios.get("http://localhost:3001/api/content")
    },
    getSavedContent: function() {
        return axios.get("/api/content")
    },
    deleteSavedContent: function(id) {
        return axios.delete("/api/content/" + id)
    },
    saveContent: function(contentData) {
        return axios.post("/api/content", contentData);
    }
};