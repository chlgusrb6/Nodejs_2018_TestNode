function start() {
    console.log('Request handler \'start\'');
    return 'Hello, start!';
   }
   
function hello() {
    console.log('Request handler \'hello\'');
    return 'Hello, hello!';    
   }
   
exports.start = start;
exports.hello = hello;