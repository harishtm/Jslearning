var http = require('http'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

/* URL should be => http://127.0.0.1:8085/calculator?op=add&n1=10&n2=20 */
/* paramets are in the query string */

var server = http.createServer(function(req, res){
	console.log(req.method, '\t', req.url);
	var urlObj = url.parse(req.url);
	if(urlObj.pathname === '/calculator'){
		var queryData = querystring.parse(urlObj.query);
		var op = queryData.op,
			n1 = parseInt(queryData.n1),
			n2 = parseInt(queryData.n2);

		var result = calculator[op](n1,n2);
		res.write(result.toString());
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8085);