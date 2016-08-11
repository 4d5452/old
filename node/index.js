(function(){
  'use strict'
  /*
   *  API node/express application used to deliver database
   *  resources to user-agent.  The resources available through
   *  this API are read/write protected.  All users must 
   *  authenticate themselves.  Once authenticated, the user
   *  must be authorized to perform the requested method on
   *  the resource.
   */
  const express = require('express');
  var app = express();
  
  /* Get database api */
  const dbApi = require('./db-controller')();

  var task = require('./item')(dbApi);

  app.use('/task', task);

  app.listen(1025, function(){
    console.log('Listening on port 1025');
  });
})();
