const orm = require('../config/orm.js');

const burgers = {
  all(callback) {
    orm.all('burgers', function(res) {
      callback(res);
    });
  },

  create(cols, vals, callback) {
    orm.create('burgers', cols, vals, function(res) {
      callback(res);
    });
  },
  update(objColVals, condition, callback) {
    orm.update('burgers', objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete(condition, callback) {
    orm.delete('burgers', condition, function(res) {
      callback(res);
    });
  },
};

module.exports = burgers;
