// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/whoami", function (req, res) {
  res.json({
      "ipaddress": req.ip,//https://expressjs.com/en/5x/api.html#req.ip
      "language": req.headers["accept-language"],//https://stackoverflow.com/questions/11845471/how-can-i-get-the-browser-language-in-node-js-express-js
      "software": req.headers["user-agent"]//got the info from req.headers for the software
      //"req-headers":req.headers // if you want to check the headers for info
    })
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
