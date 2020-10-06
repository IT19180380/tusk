var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({

        host: '127.0.0.2',
        user: 'root',
        password: 'admin',
        database: 'admin'

});
connection.connect(function(error){
    if(!!error){
        console.log('error');
    }else {
        console.log('Connected');
    }
})