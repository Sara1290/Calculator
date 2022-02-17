require('dotenv').config();
// const massive = require('massive');
const express = require('express');
var bodyParser = require('body-parser');


const app = express();

const { SERVER_PORT} = process.env;

app.use(express.json());


//end points
app.get('/api/sum')

app.post('/api/add')

app.get('/', function(req, res){
  res.sendFile(__dirname + '../../index.html'); //Gets the html
});



app.post('/submission', function(req, res) {
 var first = parseInt(req.body.firstNumber);
 var second = parseInt(req.body.lastNumber);
  var sum = Number(first + second);
  res.send('The sum is: ' + Number(sum));
 })



//spin up server
app.listen(SERVER_PORT, () => console.log(`Server Running On ${SERVER_PORT}`))



