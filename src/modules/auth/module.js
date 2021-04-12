const AuthController = require('./controller/authController');
const AuthService = require('./service/authService');
const AuthRepository = require('./repository/authRepository');
const AccountModel = require('./model/accountModel');

function init(app, container) {
  container.get('authController').configureRoutes(app);
}

module.exports = {
  AuthController,
  AuthService,
  AuthRepository,
  AccountModel,
  init,
};
