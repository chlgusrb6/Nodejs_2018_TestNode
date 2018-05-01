function sleep(millisec){
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);
}

function start(res) {
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('Hello Start!');
    res.end();
   }
   
function hello(res) {
    //sleep(20000);
    setTimeout(function(){
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('Hello hello!');
    res.end();  
   },20000);
}
exports.start = start;
exports.hello = hello;