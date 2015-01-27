////////////////////////////////////
//                                //
// Javascript CSV Parser Example  //
//                                //
////////////////////////////////////

//Register with Node Module
var csv = module.exports

//Include module references
var through2 = require("through2");

//Require file system
var fs = require('fs');

//empty list for piping
var holder = ""

//empty array for piping
var all = []

//Synchronous Parsing, reads the file and then returns the comma separated string
csv.parseSync = function(url){

	console.log(url)
	//Read the file synchronously, returns the contents of the file as a string
	var string = fs.readFileSync(url, 'utf8', function (err, data) {
		if (err) { throw err }
	});

	return string.split(',')
}

//Asynchronous Parsing, reads the file asynchronously and parses it in pieces
csv.parseAsync = function(url, callback){
	fs.readFile(url, 'utf8', function(err, data){
		if (err) { throw err }
		callback(data)
	});
}

//Prints Asynchronous CSV
csv.printsAsync = function(data){
	console.log(data.split(','))
}

//Reads the file in the chunks and parses
/*csv.parsePipe = function(){
	return through2.obj(function(chunk, enc, callback){
		for(var i =0; i<chunk.length;i++)
			if(chunk[i] == ','){
				console.log("Im at comma")
				console.log(holder)
				this.push(holder)
				holder = ""
			}
			else holder+= chunk[i]

		
		callback()
		
	});

	.on('end', function(){
		console.log
		console.log(holder)
		this.push(holder)
		holder = ""
	})
	.on('data', function(){
		all.push(data)

	})
	
}*/

csv.parsePipe = function(){
	return through2.obj(function(chunk, enc, callback){
		for(var i =0; i<chunk.length;i++)
			if(String.fromCharCode(chunk[i]) == ','){
				//console.log("Im at comma")
				//console.log(holder)
				all.push(holder)
				holder = ""
			}
			else {
				//console.log("Im else")
				//console.log(String.fromCharCode(chunk[i]))
				holder+= String.fromCharCode(chunk[i])
			}


		
		callback();
		
	},
    function(cb){
		//console.log("At flush")
		//console.log(holder)
		all.push(holder)
		holder = ""
		console.log(all)
        cb();
    }
 )
}

//csv.pipeCallback = function()

//Treats the Parser as an object
csv.parseObject = function Parser(){

}

// Parser.prototype = {
// 	constructor: Parser,
// 	on: function(eventName, callback){


// 	},
// 	run: function(){

// 	}
// }

module.exports = csv