const {SingleError} = require("./SingleError");

class NotFoundError extends SingleError {
    constructor(message) {
        super(message,404);
    }
}

module.exports = { NotFoundError }