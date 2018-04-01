

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

let saveForm1 = (userInfo) => {
  // username password email
}

let saveForm2 = (userInfo) => {
  // firstname lastname phonenumber
}

let saveForm3 = (userInfo) => {
  // street city state zip
}


// module.exports.test = Users.collection().fetch().then( (collection) => {
//   console.log(collection);
// });
module.exports.saveForm1 = saveForm1;
module.exports.saveForm2 = saveForm2;
module.exports.saveForm3 = saveForm3;
