const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

//routes
app.use(routes);

//connect to db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fe", {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

//start server
app.listen(PORT, () => 
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

