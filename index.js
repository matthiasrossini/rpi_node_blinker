var express = require("express")
var blink = require("./blink")
var onoff = require("onoff")
var app = express()

var Blinker = {
	blinker : null,
	Start : function(){
		if(!this.blinker){
			this.blinker = setInterval(function(){blink.blinkLED()},250);
		}
	},
	Stop : function(){
		clearInterval(this.blinker)
		this.blinker= null
		blink.endBlink()
	}
}

app.get("/blink", function(req, res) {
	Blinker.Start()
	res.send("Light should be blinking");
})

app.get("/stop", function(req,res){
	Blinker.Stop()
	res.send("the Blinking should stop---")
})
app.listen(3000, '0.0.0.0')
