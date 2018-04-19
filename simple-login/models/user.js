//require dependencies
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

  //set up shorthand methods name
  var Schema = mongoose.Schema;

  var UserShema = new Schema ({
    email: String,
    passwordDigest: String
  });
