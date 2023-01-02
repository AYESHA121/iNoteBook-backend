const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

connectToMongo();
const app = express();
// const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());



// Available Routes
app.use("/.netlify/functions/api/auth", require("./routes/auth"));
app.use("/.netlify/functions/api/notes", require("./routes/notes"));

// app.listen(port, () => {
//     console.log(`iNotebook listening at https://inotebook-cloud-api.onrender.com:${port}`);
// });


module.exports = app;
module.exports.handler = serverless(app);