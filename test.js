var assert = require('assert');
var nmea_checksum = require('.');

assert.equal(nmea_checksum.checksum('PMTK300,10000,0,0,0,0'), '2C');
assert.equal(nmea_checksum.checksum('$PMTK300,10000,0,0,0,0'), '2C');

assert.equal(nmea_checksum.checksum('PMTK300,10000,0,0,0,0'), '2C');
assert.equal(nmea_checksum.wrap('PMTK300,10000,0,0,0,0'), '$PMTK300,10000,0,0,0,0*2C');
assert.equal(nmea_checksum.strip('$PMTK300,10000,0,0,0,0*28'), 'PMTK300,10000,0,0,0,0');
assert.equal(nmea_checksum.isValid('$PMTK300,10000,0,0,0,0*2C'), true);
assert.equal(nmea_checksum.isValid('$PMTK300,10000,0,0,0,0*42'), false);