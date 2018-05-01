function route(pathname,handle,res,postdata){
    console.log('Routing for' + pathname);
    if(typeof handle[pathname] === 'function')
        return handle[pathname](res,postdata);
    else {
        res.writeHead(404,{'Content-type' : 'text/html'});
        res.write('404 Not found!');
        res.end();
    }
}
exports.route = route;