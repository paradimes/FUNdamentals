const express = require("express");
const cors = require("cors");

const PORT = 8081;

const app = express();

// Allow cross-origin requests (CORS)
app.use(cors());

// enable body parser to accept json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add router to the server and name it openai
app.use("/openai", require("./router"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export the express api
module.exports = app;
