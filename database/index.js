

let knex = require('knex')({
  client: 'postgresql',
  connection: {
    host     : 'localhost',
    port     : '5432',
    user     : '',
    password : '',
    database : 'eka',
    charset  : 'UTF8_GENERAL_CI'
  }
});


let Bookshelf = require('bookshelf')(knex);


let Users = Bookshelf.Model.extend({
  tableName: 'users'
});

let currentUserName = '';
let countId = 1;

let saveForm1 = (userInfo) => {
  // username password email
  // create new row with info
  currentUserName = userInfo.username;
  new Users({username: currentUserName, password: userInfo.password, email: userInfo.email })
    .save(null, {method: 'insert'})
  countId++;
}

let saveForm2 = (userInfo) => {
  // firstname lastname phonenumber
  // find username and update
}

let saveForm3 = (userInfo) => {
  // street city state zip
  // find username and update

}

module.exports.saveForm1 = saveForm1;
module.exports.saveForm2 = saveForm2;
module.exports.saveForm3 = saveForm3;
