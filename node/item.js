(function(){
  'use strict'

  var router = require('express').Router();

  // Define the item api
  //
  // /item
  router.route('/')
    .get(function(req, res){
      // Return all items in the collection
      console.log('GET all');
      res.end();
    })
    .post(function(req, res){
      // Create a new item and return location
      console.log('POST');
      res.end();
    });
  // /item/:id
  router.route('/:id')
    .get(function(req, res){
      // Return item with unique identifier, 'id'
      console.log('\tbaseUrl: ',req.baseUrl);
      console.log('\thostname: ',req.hostname);
      console.log('\tip: ',req.ip);
      console.log('\tmethod: ',req.method);
      console.log('\tparams: ',req.params);
      console.log('\tpath: ',req.path);
      console.log('\troute: ',req.route);

      res.send('Nice to meet you');
      res.end();
    })
    .put(function(req, res){
      // Update item with unique identifier, 'id'
      console.log('PUT ', req.params.id);
      //req.body
      res.end();
    })
    .delete(function(req, res){
      // Remove item with unique identifier, 'id'
      console.log('DELETE ', req.params.id);
      res.end();
    });

  module.exports = router;

})();
