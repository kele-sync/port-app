const SerialPort = require('serialport'); 

const ipc = require('./ipc')  
module.exports.init=function() {
	console.log("main init");
	//加载所有ipc服务
	ipc.setup()
    console.log(SerialPort);
}

