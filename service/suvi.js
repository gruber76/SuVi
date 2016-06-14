var Suvi,
  pollTime = 10000,
  targetTemp =  0,
  currentState = 0,
  controlChannel = 40;

Suvi = function () {};


Suvi.prototype.setup = function () {
console.log('what?');





  var Control = require('./control');
  var control1, control2;

  control1 = new Control(7, function(err) {
      if (err) {throw err;};
      control2 = new Control(9, function(err) {
        if (err) {throw err;};

      });
  });





  function readLoop() {
  	var currentTemp = ds18b20.temperatureSync('28-000006708805', {parser: 'hex'});
  	console.log('Current temperature is' + currentTemp);
  	if (currentState === 0 && currentTemp < 50) {
  		console.log('turning on heat');
  		write(1);
  		currentState = 1;
  	} else if (currentState ===1 && currentTemp > 52) {
  		console.log('turning off heat');
  		write(0);
  		currentState = 0;
  	}
    setTimeout(readLoop,10000);
  }
};

suvi = new Suvi();
suvi.setup();
