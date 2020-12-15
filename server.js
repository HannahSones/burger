const express = require("express");



// Creating server application on port 3000
const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});