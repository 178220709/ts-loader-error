//var TARGET = 'https://github.com';
let express = require('express');
let app = express();
let http = require('http');
let httpProxy = require('http-proxy');
let proxy = httpProxy.createProxyServer({});

app.use(express.static('./dist'));

// app.all('/*', function(req, res, next) {
//   console.log(req.url);
//   return proxy.web(req, res, {
//     target: TARGET
//   });
//   // next();
// });

app.get('/', function(req, res) {
  res.send('Hello Vue');
});

app.listen(2333);
