const express = require('express');
const { LOG_INFO } = require('karma/lib/constants');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/pwa-app'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/pwa-app/index.html'));});
app.listen(process.env.PORT || 8080);