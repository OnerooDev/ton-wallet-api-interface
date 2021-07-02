// Application for use TON wallet smart-contract:
// https://github.com/SeerDay

// Before use you must to configure .env

//Use lib

const express = require("express");
var app = express();

var wallet = require('./work-with-multisig.js');


//ROUTES
//
//ApiRoutes
//
//Wallet

app.get('/wallet/func/sendTo/:address/:summ',async function (req, res, next) {
	try{
    let func = await wallet.walletSend(req.params.address, req.params.summ)

    const obj = {
      tx: func.transaction.id
    };
    res.json(obj)
	}
	catch(err){
		console.log(err)
	}

});

//checkBalance
app.get('/wallet/func/balance/:address',async function (req, res, next) {
	try{
    let func = await wallet.checkBalance(req.params.address)

    res.json(func)
	}
	catch(err){
		console.log(err)
	}

});

//getAddress
app.get('/wallet/func/address/',async function (req, res, next) {
	try{
    let func = await wallet.getAddress()

		const obj = {
      address: func
    };

    res.json(obj)
	}
	catch(err){
		console.log(err)
	}

});

//app.use(function(err, req, res, next) {
//	res.status(500).send('Please update page')
//});

//
//
//

//Start WebServer
var server = app.listen(3003, function () {

    var host = "localhost";
    var port = server.address().port;

    console.log("App listen at - http://" + host + ":" + port)

});
//
