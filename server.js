const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const serverless = require('serverless-http');

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    console.log("hi");
    res.json({
        status:"success"
    })
})


app.post('/ussd', (req, res) => {
    try {
        console.log(req.body);
        
    } catch (error) {
        console.log(error);
    }
});


app.listen(port,() => {
    console.log(`USSD running on port ${port}`);
})

module.exports = app
module.exports.handler = serverless(app)