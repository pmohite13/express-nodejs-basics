var express = require('express'); // getting express

var app = express();// getting express instance

var port = 5000;

app.set('views', './src/views'); // telling express where to find template files 
app.set('view engine', 'ejs');// integrating ejs with express

app.get('/', function (req, res) { // starting express 
    res.render('index',
        {
            title: 'First Express Application',
            employees: [{ employeeName: 'Pranay' }, { employeeName: 'Mohite' }]
        });
});

app.listen(port, function (err) {

});