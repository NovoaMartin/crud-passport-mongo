const { fromDataToEntity } = require('../mapper/accountMapper');

module.exports = class AuthController {
  constructor(authService) {
    this.authService = authService;
    this.ROUTE = '/auth';
  }

  configureRoutes(app) {
    app.post(`${this.ROUTE}/register`, this.register.bind(this));
  }

  async register(req, res) {
    // const errors = [];
    // TODO
    const account = fromDataToEntity(req.body);
    // TODO

    try {
      const createdAccount = await this.authService.save(account);
      return res.json(createdAccount);
    } catch (e) {
      return res.json(e);
    }
  }
};
