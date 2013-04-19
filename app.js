var http = require('http'),
	config = require('./config.json'),
	port = process.env.PORT || config.port,
	baseLocation = config.location;

if(baseLocation.charAt(baseLocation.length - 1) === '/') {
	baseLocation = baseLocation.slice(0, -1);
}

if(config.debug) {
	console.log('base location: ' + baseLocation);
}

http.createServer(function (request, response) {
	var location = baseLocation + request.url;

	if(config.debug) {
		console.log('redirecting to ' + location);
	}
    response.writeHead(301, {'Location':location, 'Expires': (new Date).toGMTString()});
    response.end();
}).listen(port);
