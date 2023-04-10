const http = require('http');

const datacontrol = (req, resp) =>{
    resp.write('<h1>This is First Node Program</h1>');
    resp.end();
}

http.createServer(datacontrol).listen(4500)