var express = require('express');
var app = express();

// Route
app.get('/', function(req,res){
    res.send('Todo API Root');
})







app.listen(process.env.PORT,process.env.IP, function(){
    console.log('Server is runing');
})
