const express = require("express");
const app = express();
const bodyParser = require('body-parser')


//set template engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.render("sendSms.ejs");
})

app.post("/sendSMS", function (req, res) {
  const {number, content} = req.body;
  console.log(number, content);
  res.redirect("/");

  const accountSid = 'ACb0b0b19903b71165a978c48b7947c1ca'; 
  const authToken = 'd021c6fd04b4e6bfc015352eff87349b'; 
  const client = require('twilio')(accountSid, authToken); 
 
  client.messages 
      .create({ 
         body: `${content}`,  
         messagingServiceSid: 'MG68b9e9e5b2085235751b5df2cf9d8b3a',      
         to: `${number}` 
       }) 
      .then(message => console.log(message.body)) 
      .done();
});

app.listen(3000);
