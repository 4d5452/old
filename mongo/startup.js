//(function (){
  'use strict'
  
  var createAdminUser = function(){
    db = db.getSiblingDB('admin');

    var admin = { 
      user: 'admin',
      pwd: 'admin',
      roles: [
        'root'
      ]
    };

    db.createUser(admin);
  };
//}());
