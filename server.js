var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.set('port', 8888);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(app.get('port'), function() {
    console.log('listening port ', app.get('port'));

    fs.writeFile('saraminhr.pid', process.pid, (err) => {
 	if (err) throw err;
    });
});