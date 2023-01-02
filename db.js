const mongoose = require("mongoose");

const mongoURI = "mongodb-k66r:27017/inotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;