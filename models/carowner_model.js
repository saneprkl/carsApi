const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('select * from carowner order by idcarowner desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (firstname,lastname,streetaddress) values(?,?,?)',
      [carowner.firstname, carowner.lastname, carowner.streetaddress],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from carowner where idcarowner=?', [id], callback);
  },
  update: function(id, carowner, callback) {
    return db.query(
      'update carowner set firstname=?,lastname=?, streetaddress=? where idcarowner=?',
      [carowner.firstname, carowner.lastname, carowner.streetaddress, id],
      callback
    );
  }
};

module.exports = carowner;