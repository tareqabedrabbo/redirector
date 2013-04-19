var http = require('http'),
	util = require('util'),
	config = require('./config.json'),
	port = process.env.PORT || config.port,
	baseLocation = config.location;

if(baseLocation.charAt(baseLocation.length - 1) === '/') {
	baseLocation = baseLocation.slice(0, -1);
}

if(config.debug) {
	util.log('base location: ' + baseLocation);
}

http.createServer(function (request, response) {
	var location = baseLocation + request.url;

	if(config.debug) {
		util.log('redirecting to ' + location);
	}
    response.writeHead(301, {'Location':location, 'Expires': (new Date).toGMTString()});
    response.end();
}).listen(port);
