function start(res) {
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('Hello Start!');
    res.end();
   }
   
function hello(res) {
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('Hello hello!');
    res.end();  
   }
   
exports.start = start;
exports.hello = hello;