var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
// var blinkIntnerval = setInterval(blinkLED, 250);

module.exports = {

blinkLED : function() {
	if(LED.readSync() === 0) {
		LED.writeSync(1);
	} else {
		LED.writeSync(0)
	}
},

endBlink : function() {
	LED.writeSync(0);
}
}

