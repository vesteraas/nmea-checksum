function checksum(_command) {
    var command = _command[0] === '$' ? _command.slice(1) : _command;

    var checksum = 0;
    for(var i = 0; i < command.length; i++) {
        checksum = checksum ^ command.charCodeAt(i);
    }

    var hex = Number(checksum).toString(16).toUpperCase();
    if (hex.length < 2) {
        hex = ("00" + hex).slice(-2);
    }

    return hex;
}

function wrap(_command) {
    var command = _command[0] === '$' ? _command.slice(1) : _command;

    return '$' + command + '*' + checksum(command);
}

function strip(_command) {
    return _command.slice(1).slice(0, -3);
}

function isValid(_command) {
    var _checksum = _command.slice(-2);

    var command = strip(_command);

    return _checksum === checksum(command);
}

module.exports = {
    checksum: checksum,
    wrap: wrap,
    strip: strip,
    isValid: isValid
}