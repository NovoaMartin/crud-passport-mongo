const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const AccountModel = mongoose.model('Account', accountSchema);

module.exports = AccountModel;
