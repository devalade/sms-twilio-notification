const express = require("express");
const app = express();
const bodyParser = require('body-parser')


require('dotenv').config();

//set template engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/home", (req, res) => {
  console.log("Server start")
  res.json({msg: "On se connecte correctement"});
})

// app.post("/", function (req, res) {
//   const {number, content} = req.body;
//   console.log(number, content);
 
//   const accountSid = 'ACb0b0b19903b71165a978c48b7947c1ca'; 
// const authToken = 'ff3dacfba3f7d5bfd33a74e70f48c288'; 
// const client = require('twilio')(accountSid, authToken); 
 
// client.messages 
//       .create({ 
//          body: content,  
//          messagingServiceSid: 'MG68b9e9e5b2085235751b5df2cf9d8b3a',      
//          to: number 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();
//   res.redirect("/");

// });

const PORT = 3000 || process.env.PORT;
app.listen(PORT);
