const { fromDataToEntity } = require('../mapper/accountMapper');

module.exports = class AuthController {
  constructor(authService) {
    this.authService = authService;
    this.ROUTE = '/auth';
  }

  configureRoutes(app) {
    app.get(`${this.ROUTE}/register`, this.register.bind(this));
  }

  async register(req, res) {
    const errors = [];
    // TODO
    const account = fromDataToEntity(req.body);
    // TODO

    try {
      await this.authService.save(account);
      res.json(account);
    } catch (e) {
      res.json(e);
    }
  }

  login(req, res) {

  }
};
