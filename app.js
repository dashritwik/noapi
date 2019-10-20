const options = {

	// See terminal logs for more details
	serverName: 'MyApi',
	host: 'localhost',
	port: '3000',


};


const server = require('noapi')(options);



module.exports = server;