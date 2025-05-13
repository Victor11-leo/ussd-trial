const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post('/ussd', (req, res) => {
    try {
        console.log(req.body);
        
    } catch (error) {
        console.log(error);
    }
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;