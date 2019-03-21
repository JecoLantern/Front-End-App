import axios from "axios";
// import fetch from "fetch";

export default {
    getContent: function() {
        return axios({
            method: 'GET',
            url: "https://ign-apis.herokuapp.com/content?startIndex=30&count=5",
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {'Accept': ' application/json'},
            
    }).then(response => console.log(response));
        // fetch("https://ign-apis.herokuapp.com/content?startIndex=30&count=5")
        //     .then(function(response) {
        //         return response.json();
        // }).then(function(jsonResponse) {
        //     // do something with jsonResponse
        //     console.log(jsonResponse)
        // });
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