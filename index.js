#! /usr/bin/env node

var user = process.env.USER;
var hostname = require('os').hostname();

var list = process.argv.slice(2);
if (!list.length) {
    console.log(user + '@' + hostname + ':' + require('path').resolve());
}
else {
    list.forEach(function(item, index) {
        console.log(user + '@' + hostname + ':' + require('path').resolve(item));
    });
}
