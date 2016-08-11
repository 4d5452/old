//(function(){
  'use strict'

  print('Available Function(s):');
  print('\t'+'createHttpRoles(databaseName, collectionName)');
  print('\t'+'createUser(databaseName, username)');
  print('');

  var httpRoles = {
    "get": {
      "name": "GET",
      "actions": [ "find" ]
    },
    "put": {
      "name": "PUT",
      "actions": [ "update" ]
    },
    "post": {
      "name": "POST",
      "actions": [ "insert" ]
    },
    "delete": {
      "name": "DELETE",
      "actions": [ "remove" ]
    }
  };// end httpRoles


  var createHttpRoles = function(databaseName="app", collectionName=''){
    /*
     * Defines HTTP api roles for user authentication...
     */ 

    // Use <dbName>
    db = db.getSiblingDB(databaseName);
    var newRole = {};
    var roleName = "";

    print("Adding HTTP Role(s) to collection " + collectionName);
    print("\tin database " + databaseName);

    for(var role in httpRoles){
      if(collectionName){ 
        roleName = httpRoles[role].name + "." + collectionName;
      }else{
        roleName = httpRoles[role].name;
      }
      newRole = {
        role: roleName,
        privileges: [
          {
            resource: { db: databaseName, collection: collectionName },
            actions: httpRoles[role].actions
          }
        ],
        roles: []
      };// end newRole 

      db.createRole(newRole);

      print("\tAdded Role: " + roleName);
    };// end for loop
    print("");
  };// end createRoles
  
  var createUser = function(databaseName, username) {
    
    db = db.getSiblingDB(databaseName);

    var newUser = {
      user: username,
      pwd: "default",
      roles: [  ]
    };// end user apiUser

    db.createUser(newUser);

    print('Added user(s):');
    print('\t'+username);
    print('');
  };// end createApiUser

//}());
