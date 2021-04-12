module.exports = class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async save(account) {
    // TODO - validate user
    return this.authRepository.save(account);
  }
};
