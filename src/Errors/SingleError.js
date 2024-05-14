class SingleError extends Error {
  constructor(error_message, http_code = 400) {
    super(error_message);
    this.errors = [error_message];
    this.http_code = http_code;
  }
}

module.exports = { SingleError };
