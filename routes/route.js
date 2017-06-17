'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var info = {};
    info.ipaddress =req.connection.remoteAddress.split(':').splice(-1)[0];
    info.language =req.headers["accept-language"].split(',')[0];
    info.software = req.headers["user-agent"].split('(')[1].split(')')[0];
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(info));
});

module.exports = router;