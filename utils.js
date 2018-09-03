// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

function getHTML (options, callback) {
  /* Add your code here */
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    let str = '';

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    response.on('data', function (data) {
      str += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
        callback(str);
    });
  });
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function printHTML (html) {
    console.log(html);
    console.log("called");
}

getHTML (requestOptions, printHTML);