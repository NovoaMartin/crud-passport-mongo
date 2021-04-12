const { fromModelToEntity } = require('../mapper/accountMapper');

module.exports = class AuthRepository {
  constructor(AccountModel) {
    this.AccountModel = AccountModel;
  }

  async save(acc) {
    const account = new this.AccountModel(acc);
    const createdAccount = await account.save();
    return fromModelToEntity(createdAccount);
  }
};
