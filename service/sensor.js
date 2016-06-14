var Sensor,
  ds18b20 = require('ds18b20'),
  oneWireDevice = '28-000006708805';

Sensor = function () {};

Sensor.prototype.getTemp = function getTemp() {
  return ds18b20.temperatureSync(oneWireDevice, {parser: 'hex'});
}


ds18b20.sensors(function(err, ids) {
  // got sensor IDs ...
  console.log(ids);
});


module.exports = Sensor;
