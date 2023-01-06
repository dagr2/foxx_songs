
(function() {
  "use strict";

  const createRouter = require('@arangodb/foxx/router');
  const router = createRouter();

  module.context.use(router);

  // include console module so we can log something (in the server's log)
  var console = require("console");
  var ArangoError = require("@arangodb").ArangoError;

  // we also need this module for custom responses
  var actions = require("@arangodb/actions");

  // use joi for validation 
  var joi = require("joi");

  router.get('/index', function (req, res) {
    res.set("content-type", "text/html");

    var body = `
      <html>
        <head>
        </head>
        <body>
        </body>
      </html>
    `
    
    res.body = body;
  })
  .summary("prints an overview page");
