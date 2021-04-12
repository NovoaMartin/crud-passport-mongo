const {
  default: DIContainer, object, get,
} = require('rsdi');

const {
  AuthController, AuthService, AuthRepository, AccountModel,
} = require('../modules/auth/module');

function addAuthModuleDefinitions(container) {
  container.addDefinitions({
    authController: object(AuthController).construct(get('authService')),
    authService: object(AuthService).construct(get('authRepository')),
    authRepository: object(AuthRepository).construct(AccountModel),
  });
}

module.exports = function configureDI() {
  const container = new DIContainer();
  // addCommonDefinitions(container);
  addAuthModuleDefinitions(container);
  return container;
};
