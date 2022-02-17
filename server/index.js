require('dotenv').config();
const express = require('express');



const app = express();

const { SERVER_PORT} = process.env;

app.use(express.json());

//end points
app.get('/api/solution')



app.post('/api/add', function(req, res) {
 var firstINT = parseInt(req.body.firstINT);
 var secondINT = parseInt(req.body.secondINT);
  var solution = Number(firstINT + secondINT);
  res.send('The sum is: ' + Number(solution));
})



//spin up server
app.listen(SERVER_PORT, () => console.log(`Server Running On ${SERVER_PORT}`))



