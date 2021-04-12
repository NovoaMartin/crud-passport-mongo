const {
  default: DIContainer, object, get,
} = require('rsdi');

function addAuthModuleDefinitions(container) {
}

module.exports = function configureDI() {
  const container = new DIContainer();
  // addCommonDefinitions(container);
  addAuthModuleDefinitions(container);
  return container;
};
