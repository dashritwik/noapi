const options = {

	// See terminal logs for more details
	serverName: 'MyApi',
	host: 'localhost',
	port: '3000',


};


const {app,server,express} = require('noapi')(options);

const router =express.Router()
router.get('/',(req,res,next)=>{
    res.status(200).send("<h1>This is my home page </h1>")
})
app.use('/index',router)

module.exports = server;