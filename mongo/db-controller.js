(function(){
  'use strict'
  /*
   * DB Client that will act on behalf of a remote user-agent.  The
   * roles associated with this client should be limited to the 
   * purpose of the api.  i.e. if the end-user does not need the ability
   * to delete content from the database, then this client should not 
   * be given permission to do so. 
   */
  var mongoClient = require('mongodb').MongoClient;
  var assert = require('assert');

  var db = null;
  //need to move this to a configuration file: url.conf
  const urlOps = { // if this changes, be sure to update getUrl func...
    username: "API",
    password: "default",
    host: "localhost",
    port: "27017",
    database: "app",
    options: {
      authMechanism: "SCRAM-SHA-1",
      authSource: "app",
      connectTimeoutMS: 5000
    }
  };// end urlOptions

  function httpApi(method, username, collection, id){
    console.log("HAHAHA FROm httpAPI");
  };// end httpApi

  exports.open = function(){
    return new Promise(function(resolve, reject){
      mongoClient.connect(getUrl()).
        then(function(database){
          db = database;
          resolve(httpApi);
        }).catch(function(err){
          reject(Error("Failed connection attempt"));
          console.log(err);
        });
    });// end promise


  };// end open

  exports.close = function(){
    db.close(false, function(err, result){
      if(err){
        console.log(result);
      } 
    });

  };// end close

  //need to move this to its own module...
  function getUrl(){
    return "mongodb://" +
    urlOps.username + ":" +
    urlOps.password + "@" +
    urlOps.host + ":" +
    urlOps.port + "/" +
    urlOps.database + "?" +
    "authMechanism" + "=" + urlOps.options.authMechanism + 
    "&" + "authSource" + "=" + urlOps.options.authSource +
    "&" + "connectTimeoutMS" + "=" + urlOps.options.connectTimeoutMS;
  }

})();
