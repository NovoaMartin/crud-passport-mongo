const Account = require('../entity/account');

function fromDataToEntity({
  id, username, password, email,
}) {
  return new Account(id, username, password, email);
}
