const Account = require('../entity/account');

function fromDataToEntity({
  id, username, password, email,
}) {
  return new Account(id, username, password, email);
}

function fromModelToEntity({
  _id, username, password, email,
}) {
  return new Account(_id, username, password, email);
}

module.exports = {
  fromDataToEntity,
  fromModelToEntity,
};
