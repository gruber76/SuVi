
var Control,
  controlChannel,
  currentState = false,
  gpio = require('rpi-gpio');


Control = function(channel, callback) {
  this.controlChannel = channel || this.controlChannel;
  gpio.setup(controlChannel, gpio.DIR_OUT, callback);
};

Control.prototype.turnOn = function turnOn() {
  console.log('turning on, currentState = ' + currentState);
  gpio.write(this.controlChannel, true)
  this.currentState = true;
};

Control.prototype.turnOff = function turnOff() {

  console.log('turning off, currentState = ' + currentState);
  gpio.write(this.controlChannel, false)
  this.currentState = false;
};

Control.prototype.setState = function setState (newState) {

  console.log('Setting State = ' + newState);
  if (newState != currentState) {
    if (newState) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }
};

module.exports = Control;
