const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/order-calendar'));
app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

