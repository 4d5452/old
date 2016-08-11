var dbController = require('./db-controller');

dbController.open().
  then(function(api){
    console.log("Opened db");
    console.log("Closing db");
    api();
    dbController.close();    
  }).catch(function(err){
    console.log(err);
  });



